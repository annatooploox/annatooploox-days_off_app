import { addRange } from './range';

describe('with overwrite = true', () => {
  it('adds a range to an empty set', () => {
    expect(addRange([], { start: 3, end: 7, type: 'vacation' }, true)).toEqual([
      { start: 3, end: 7, type: 'vacation' },
    ]);
  });

  it('adds a non-conflicting range after', () => {
    expect(
      addRange(
        [{ start: 2, end: 8, type: 'unpaid' }],
        { start: 10, end: 13, type: 'vacation' },
        true,
      ),
    ).toEqual([
      { start: 2, end: 8, type: 'unpaid' },
      { start: 10, end: 13, type: 'vacation' },
    ]);
  });

  it('adds a non-conflicting range before', () => {
    expect(
      addRange(
        [{ start: 10, end: 13, type: 'vacation' }],
        { start: 2, end: 8, type: 'unpaid' },
        true,
      ),
    ).toEqual([
      { start: 2, end: 8, type: 'unpaid' },
      { start: 10, end: 13, type: 'vacation' },
    ]);
  });

  it('adds a conflicting range', () => {
    expect(
      addRange(
        [{ start: 2, end: 8, type: 'unpaid' }],
        { start: 6, end: 13, type: 'vacation' },
        true,
      ),
    ).toEqual([
      { start: 2, end: 5, type: 'unpaid' },
      { start: 6, end: 13, type: 'vacation' },
    ]);
  });

  it('adds a conflicting range', () => {
    expect(
      addRange(
        [
          { start: 2, end: 8, type: 'vacation' },
          { start: 10, end: 15, type: 'vacation' },
        ],
        { start: 6, end: 13, type: 'unpaid' },
        true,
      ),
    ).toEqual([
      { start: 2, end: 5, type: 'vacation' },
      { start: 6, end: 13, type: 'unpaid' },
      { start: 14, end: 15, type: 'vacation' },
    ]);
  });

  it('removes ranges that are completely overwritten', () => {
    expect(
      addRange(
        [
          { start: 2, end: 5, type: 'vacation' },
          { start: 7, end: 9, type: 'vacation' },
          { start: 12, end: 15, type: 'unpaid' },
        ],
        { start: 4, end: 13, type: 'vacation' },
        true,
      ),
    ).toEqual([
      { start: 2, end: 3, type: 'vacation' },
      { start: 4, end: 13, type: 'vacation' },
      { start: 14, end: 15, type: 'unpaid' },
    ]);
  });

  it('splits an existing range if it is covered by the new range', () => {
    expect(
      addRange([{ start: 1, end: 7, type: 'vacation' }], { start: 3, end: 5, type: 'unpaid' }),
    ).toEqual([
      { start: 1, end: 2, type: 'vacation' },
      { start: 3, end: 5, type: 'unpaid' },
      { start: 6, end: 7, type: 'vacation' },
    ]);
  });

  it('handles ranges with the same start', () => {
    expect(
      addRange([{ start: 1, end: 7, type: 'vacation' }], { start: 1, end: 5, type: 'unpaid' }),
    ).toEqual([
      { start: 1, end: 5, type: 'unpaid' },
      { start: 6, end: 7, type: 'vacation' },
    ]);
  });

  it('handles ranges with the same end', () => {
    expect(
      addRange([{ start: 1, end: 7, type: 'vacation' }], { start: 3, end: 7, type: 'unpaid' }),
    ).toEqual([
      { start: 1, end: 2, type: 'vacation' },
      { start: 3, end: 7, type: 'unpaid' },
    ]);
  });

  it('stress test', () => {
    expect(
      addRange(
        Array.from(Array(100000), (_, index) => ({
          start: index,
          end: index,
          type: 'vacation',
        })),
        { start: -1, end: -1, type: 'unpaid' },
      ),
    ).toEqual([
      { start: -1, end: -1, type: 'unpaid' },
      ...Array.from(Array(100000), (_, index) => ({
        start: index,
        end: index,
        type: 'vacation',
      })),
    ]);
  });
});

describe('with overwrite = false', () => {
  it('adds a range to an empty set', () => {
    expect(addRange([], { start: 3, end: 7, type: 'vacation' }, false)).toEqual([
      { start: 3, end: 7, type: 'vacation' },
    ]);
  });

  it('adds a conflicting range', () => {
    expect(
      addRange(
        [
          { start: 2, end: 8, type: 'vacation' },
          { start: 10, end: 15, type: 'vacation' },
        ],
        { start: 6, end: 13, type: 'unpaid' },
        false,
      ),
    ).toEqual([
      { start: 2, end: 8, type: 'vacation' },
      { start: 9, end: 9, type: 'unpaid' },
      { start: 10, end: 15, type: 'vacation' },
    ]);
  });

  it('does not add anything if the range is completely covered', () => {
    expect(
      addRange(
        [
          { start: 2, end: 8, type: 'vacation' },
          { start: 9, end: 15, type: 'vacation' },
        ],
        { start: 6, end: 13, type: 'unpaid' },
        false,
      ),
    ).toEqual([
      { start: 2, end: 8, type: 'vacation' },
      { start: 9, end: 15, type: 'vacation' },
    ]);
  });

  it('splits the range if it covers holes between ranges', () => {
    expect(
      addRange(
        [
          { start: 2, end: 5, type: 'vacation' },
          { start: 7, end: 9, type: 'vacation' },
          { start: 12, end: 15, type: 'vacation' },
        ],
        { start: 4, end: 13, type: 'unpaid' },
        false,
      ),
    ).toEqual([
      { start: 2, end: 5, type: 'vacation' },
      { start: 6, end: 6, type: 'unpaid' },
      { start: 7, end: 9, type: 'vacation' },
      { start: 10, end: 11, type: 'unpaid' },
      { start: 12, end: 15, type: 'vacation' },
    ]);
  });

  it('handles ranges with the same start', () => {
    expect(
      addRange(
        [{ start: 1, end: 5, type: 'vacation' }],
        { start: 1, end: 7, type: 'unpaid' },
        false,
      ),
    ).toEqual([
      { start: 1, end: 5, type: 'vacation' },
      { start: 6, end: 7, type: 'unpaid' },
    ]);
  });

  it('handles ranges with the same end', () => {
    expect(
      addRange(
        [{ start: 3, end: 7, type: 'vacation' }],
        { start: 1, end: 7, type: 'unpaid' },
        false,
      ),
    ).toEqual([
      { start: 1, end: 2, type: 'unpaid' },
      { start: 3, end: 7, type: 'vacation' },
    ]);
  });

  // sprowadzenie do 100ms, kod zbyt wolny!

  it('stress test', () => {
    expect(
      addRange(
        Array.from(Array(100000), (_, index) => ({
          start: index,
          end: index,
          type: 'vacation',
        })),
        { start: -1, end: -1, type: 'unpaid' },
        false,
      ),
    ).toEqual([
      { start: -1, end: -1, type: 'unpaid' },
      ...Array.from(Array(100000), (_, index) => ({
        start: index,
        end: index,
        type: 'vacation',
      })),
    ]);
  });
});
