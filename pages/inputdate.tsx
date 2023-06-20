import React from 'react';
import Select from 'react-select';

const numbers = Array.from({ length: 35 }, (_, index) => index + 1);

const options = [
    { value: numbers.toString(), label: numbers.toString() },
];


export default function InputDate() {
    return <Select className="input" options={options} placeholder="Choose date" />;
}
