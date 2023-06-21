import React, { useState } from 'react';
import Select from 'react-select';

export default function InputDate() {

    const numbers = Array.from({ length: 35 }, (_, index) => index + 1);

    const options = numbers.map((elem) =>
        (<option value={elem}>{" "}{elem} {" "}</option>));

    return <select className="input"

        placeholder="Choose date" >{options}</select>;
}