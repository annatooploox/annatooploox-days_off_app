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
    <select
      className="bg-lightgrey list-style-type: none display: inline; 
      cursor-pointer text-sm font-medium leading-[10px] text-center 
      transition-all duration-200 whitespace-nowrap select-none 
      touch-manipulation relative -translate-x-2/4 block px-[30px] 
      py-[5px] left-2/4 top-[200px];"
      placeholder="Choose date"
      value={value}
      onChange={chooseOption}
    >
      {options}
    </select>
  );
}
