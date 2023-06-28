import React, { useState } from 'react';

export default function InputDate() {

    const numbers = Array.from({ length: 35 }, (_, index) => index + 1);

    const options = numbers.map((elem) =>
        (<option key={elem} value={elem}>{elem}</option>));

    // na select onChange
    // pojedynczym itemom mam wstrzykiwać inny background, 
    // plus margines ujemny (połowa gapa - bo z prawej i z lewej)
    // aby nie wychodziło poza contener to ustawiamy... overflow:hidden na kontenerze

    return (
        <select className="input" placeholder="Choose date" >{options}
        </select>
    )
}