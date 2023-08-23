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
  if (ranges.length === 0) {
    return [newRange];
  }

  const newRanges: Range[] = [];

  // overwrite = true
  // 1. Dodajemy zakresy z ranges przed addedRange w kolejności
  // 2. Dodajemy addedRange
  // 3. Dodajemy zakresy z ranges po addedRange w kolejności

  // 1. O(N)
  if (overwrite) {
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
    let start: number | undefined = undefined;
    let end: number | undefined = undefined;
    //to split ranges

    console.log('ranges: ', ...ranges);

    for (const range of ranges) {
      console.log('start');
      if (range.start < newRange.start) {
        console.log(`pushujemy wczesniejszy el: ${range.start}, ${range.end}`);
        newRanges.push(range);
        if (range.end > newRange.start) {
          console.log(`definiujemy poczatek: ${range.end + 1}`);
          start = range.end + 1;
          newRange = { ...newRange, start };
        }
      }

      if (range.start > newRange.start) {
        if (range.start < newRange.end) {
          console.log(`definiujemy koniec ${range.start - 1}`);
          end = range.start - 1;
        }

        if (start && end && end >= start) {
          console.log(`mamy kawałek: ${start}, ${end}}`);
          newRanges.push({ ...newRange, start, end });
          console.log('zerujemy');
          start = undefined;
          end = undefined;
          //zerujemy bo zaczynamy od nowa przy kolejnej iteracji. Od poczåtku szukamy czy c
        }

        console.log(`dodajemy element po: ${range.start}, ${range.end}`);
        newRanges.push(range);
      }

      // jesli sie nie pokrywa
    }

    // // |-----|
    // //  |---------
    // for (const range of ranges) {
    //   if (range.start < newRange.start) {
    //     newRanges.push(range);
    //     if (range.end > newRange.start) {
    //       start = range.end + 1 };
    //       newRange = {...newRange, }

    //     }
    //   }
    // }

    // newRanges.push(newRange);

    // //    |---------
    // // |--------|
    // for (const range of ranges) {
    //   if (range.start > newRange.start) {
    //     newRanges.push(range);
    //     if (range.start < newRange.end) {
    //       newRange = { ...newRange, end: range.start - 1 };

    //     }
    //   }
    // }
  }
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

// stare zakresy na wierzch nowego dodaję po ELSE!!!
