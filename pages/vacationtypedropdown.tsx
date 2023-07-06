import React, { useState } from 'react';

export default function VacationTypedropdown({ value, onChange }: {
    value: string,
    onChange: (value: string) => void
}) {
    const vacationType = ["vacation", "unpaid", "parental leave"];

    const options = vacationType.map((elem) =>
        (<option key={elem} value={elem}>{elem}</option>));

    const chooseOption: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        const selectedOption = event.target.value;
        onChange(selectedOption);
        console.log(selectedOption);
    };


    // plus margines ujemny (połowa gapa - bo z prawej i z lewej)
    // aby nie wychodziło poza contener to ustawiamy... overflow:hidden na kontenerze

    return (
        <select className="input" placeholder="Choose day off type" value={value} onChange={chooseOption} >{options}
        </select>
    )
}