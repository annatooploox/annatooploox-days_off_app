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
  // if (!overwrite) {
  //   return addRangeNoOverwrite(ranges, newRange);
  // }

  const newRanges: Range[] = [];

  // overwrite = true
  // 1. Dodajemy zakresy z ranges przed addedRange w kolejności
  // 2. Dodajemy addedRange
  // 3. Dodajemy zakresy z ranges po addedRange w kolejności

  // 1. O(N)
  for (const range of ranges) {
    if (range.start < newRange.start) {
      if (range.end < newRange.start) {
        newRanges.push(range);
      } else {
        newRanges.push({ ...range, end: newRange.start - 1 });
        // to samo co: newRanges.push({ start: range.start, end: newRange.start - 1, type: range.type });
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

  // return newRanges.sort((a, b) => a.start - b.start);
  return newRanges;
}

// function addRangeNoOverwrite(
//   ranges: Readonly<Range>[],
//   newRange: Readonly<Range>,
// ): Readonly<Range>[] {
//   let newRanges = [newRange];

//   for (const range of ranges) {
//     newRanges = addRange(newRanges, range);
//   }

//   return newRanges;
// }

// ranges: |--------|--|-------------------------------|   5   8
// added:  |--------------|----------|-----------------|   10  15

//////////////////////////////////////////////////////////
// ranges: |--------|--------|-------------------------|    5  10
// added:  |--------------|----------|-----------------|    8  15
//                           |
//                           v
// ranges: |--------|----|-----------------------------|
// added:  |--------------|----------|-----------------|
//////////////////////////////////////////////////////////

// ranges: |--------------|----------|-----------------|   10  15
// added:  |--------|--|-------------------------------|   5   8

//////////////////////////////////////////////////////////
// ranges: |--------------|----------|-----------------|
// added:  |--------|--------|-------------------------|
//                           |
//                           v
// ranges: |------------------|------|-----------------|
// added:  |--------|--------|-------------------------|
//////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////
// ranges: |--------------|----------|-----------------|
// added:  |------------|---------------|--------------|
//                           |
//                           v
// ranges: |-------------------------------------------|
// added:  |------------|---------------|--------------|
//////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////
// ranges: |---------|------------------|--------------|
// added:  |--------------|----------|-----------------|
//                           |
//                           v
// ranges: |---------|---|------------|-|--------------|
// added:  |--------------|----------|-----------------|
//////////////////////////////////////////////////////////

// if (overwrite){}
// else{}

// stare zakresy na wierzch nowego dodaję po ELSE!!!
