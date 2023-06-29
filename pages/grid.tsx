import React, { useState } from 'react';
import InputDate from './inputdate';

export default function Grid({ startNumber, endNumber }: {
  startNumber: number,
  endNumber: number
}) {


  const numbers = Array.from({ length: 35 }, (_, index) => index + 1);

  return (
    <div className="container">
      {numbers.map((number) => {
        const selected = number >= startNumber && number <= endNumber;

        return (

          <div key={number} className={`item number ${selected ? 'selected' : ''}`}>
            {number}
          </div>
        );
      })}
    </div>

  );
}
