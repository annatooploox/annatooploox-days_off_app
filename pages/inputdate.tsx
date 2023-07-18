import React from 'react';

export default function InputDate({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) {
  const numbers = Array.from({ length: 35 }, (_, index) => index + 1);

  const options = numbers.map((elem) => (
    <option key={elem} value={elem}>
      {elem}
    </option>
  ));

  const chooseOption: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const selectedOption = event.target.value;
    onChange(Number(selectedOption));
    console.log(selectedOption);
  };

  // plus margines ujemny (połowa gapa - bo z prawej i z lewej)
  // aby nie wychodziło poza contener to ustawiamy... overflow:hidden na kontenerze

  return (
    <select className="input" placeholder="Choose date" value={value} onChange={chooseOption}>
      {options}
    </select>
  );
}
