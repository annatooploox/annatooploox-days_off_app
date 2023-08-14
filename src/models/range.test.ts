// install library, add TypeVacation to test cases

import { addRange } from './range';

describe('addRange', () => {
  it.only('adds a range to an empty set', () => {
    expect(addRange([], { start: 3, end: 7, type: 'vacation' })).toEqual([
      { start: 3, end: 7, type: 'vacation' },
    ]);
  });

  it.only('adds a non-conflicting range', () => {
    expect(
      addRange([{ start: 2, end: 8, type: 'unpaid' }], { start: 10, end: 13, type: 'vacation' }),
    ).toEqual([
      { start: 2, end: 8, type: 'unpaid' },
      { start: 10, end: 13, type: 'vacation' },
    ]);
  });

  it.only('adds a conflicting range', () => {
    expect(
      addRange([{ start: 2, end: 8, type: 'unpaid' }], { start: 6, end: 13, type: 'vacation' }),
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
        { start: 6, end: 13, type: 'vacation' },
      ),
    ).toEqual([
      { start: 2, end: 5, type: 'vacation' },
      { start: 6, end: 13, type: 'vacation' },
      { start: 14, end: 15, type: 'vacation' },
    ]);
  });

  it('removes ranges that are completely overwritten', () => {
    expect(
      addRange(
        [
          { start: 2, end: 5, type: 'vacation' },
          { start: 7, end: 9, type: 'vacation' },
          { start: 12, end: 15, type: 'vacation' },
        ],
        { start: 4, end: 13, type: 'vacation' },
      ),
    ).toEqual([
      { start: 2, end: 3, type: 'vacation' },
      { start: 4, end: 13, type: 'vacation' },
      { start: 14, end: 15, type: 'vacation' },
    ]);
  });

  describe('with overwrite = false', () => {
    it('adds a conflicting range', () => {
      expect(
        addRange(
          [
            { start: 2, end: 8, type: 'vacation' },
            { start: 10, end: 15, type: 'vacation' },
          ],
          { start: 6, end: 13, type: 'vacation' },
          false,
        ),
      ).toEqual([
        { start: 2, end: 8, type: 'vacation' },
        { start: 9, end: 9, type: 'vacation' },
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
          { start: 6, end: 13, type: 'vacation' },
          false,
        ),
      ).toEqual([
        { start: 2, end: 8, type: 'vacation' },
        { start: 10, end: 15, type: 'vacation' },
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
          { start: 4, end: 13, type: 'vacation' },
          false,
        ),
      ).toEqual([
        { start: 2, end: 5, type: 'vacation' },
        { start: 6, end: 6, type: 'vacation' },
        { start: 7, end: 9, type: 'vacation' },
        { start: 10, end: 11, type: 'vacation' },
        { start: 12, end: 15, type: 'vacation' },
      ]);
    });
  });
});
