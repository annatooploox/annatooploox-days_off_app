import React, { useState } from 'react';

export default function Grid() {
  const numbers = Array.from({ length: 35 }, (_, index) => index + 1);

  const startNumber = 13;
  const endNumber = 18;

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
