import { VacationType } from './vacationType';

interface Range {
  start: number;
  end: number;
  type: VacationType;
}

/**
 * @param ranges Disjoined ranges sorted by start
 * @param newRange A new range to add
 * @param overwrite Indicates whether to overwrite existing ranges
 * @returns A set of initial ranges with the new one added; ranges are guaranteed to be disjoined
 * and sorted by start
 */

export function addRange(
  ranges: Readonly<Range>[],
  newRange: Readonly<Range>,
  overwrite = true,
): Readonly<Range>[] {
  const newRanges: Range[] = [];

  if (overwrite) {
    // 1. O(N)
    for (const range of ranges) {
      if (range.start < newRange.start) {
        if (range.end < newRange.start) {
          newRanges.push(range);
        } else {
          newRanges.push({ ...range, end: newRange.start - 1 });
        }
      }
    }

    // 2. O(1)
    newRanges.push(newRange);

    // 3. O(N)
    for (const range of ranges) {
      if (range.end > newRange.end) {
        if (range.start > newRange.end) {
          newRanges.push(range);
        } else {
          newRanges.push({ ...range, start: newRange.end + 1 });
        }
      }
    }
  } else {
    // overwrite == false
    // 1. Dodajemy ranges:
    // 1.a Jeżeli pomiędzy obecnym range a poprzednim znajduje się kawałek newRange, to dodajemy ten kawałek ✔
    // 1.b Dodajemy obecny range ✔
    // 2. Sprawdzamy kawałek newRange za ostatnim range ✔

    let prevEnd = -Infinity;

    for (const range of ranges) {
      if (prevEnd + 1 !== range.start && newRange.end > prevEnd && newRange.start < range.start) {
        const start = Math.max(prevEnd + 1, newRange.start);
        const end = Math.min(range.start - 1, newRange.end);
        newRanges.push({ ...newRange, start, end });
      }

      prevEnd = range.end;
      newRanges.push(range);
    }

    if (newRange.end > prevEnd) {
      const start = Math.max(prevEnd + 1, newRange.start);
      newRanges.push({ ...newRange, start });
    }
  }
  return newRanges;
}
