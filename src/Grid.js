import React from 'react'

export default function Grid () {
    const numbers = Array.from({ length: 35 }, (_,index) => index + 1);
  return (
        <div className="container">
          {numbers.map((number) => (
          <div key={number} className="items number">
          {number}
          </div>
          ))}
        </div>
  );
}