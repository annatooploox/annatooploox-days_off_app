//zwraca zakresy, które wykorzystam w App

import { VacationType } from './vacationType';

// sortowanie dodać - do przechowywania rangów - tablica RANGE zawsze posortowana

interface Range {
  start: number;
  end: number;
  type: VacationType;
}

/**
 * @param ranges Disjoined ranges sorted by start
 * @param addedRange A new range to add
 * @param overwrite Indicates whether to overwrite existing ranges
 * @returns A set of initial ranges with the new one added; ranges are guaranteed to be disjoined
 * and sorted by start
 */
export function addRange(
  ranges: Readonly<Readonly<Range>[]>,
  addedRange: Readonly<Range>,
  overwrite = true,
): Range[] {
  const newRange: Range[] = [];

  const leftoverRange = { ...addedRange };
  // leftoverRange.start

  for (const range of ranges) {
    // porównanie:
    // - w ogóle nie nachodzą
    // - nachodzą
    // newRange.push(addedRange);
    // if (range.start < addedRange.start) {
    // }
  }
}
