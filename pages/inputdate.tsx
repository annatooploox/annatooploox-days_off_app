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
      // className="bg-lightgrey list-style-type: none display: inline;
      // cursor-pointer text-sm font-medium leading-[10px] text-center
      // transition-all duration-200 whitespace-nowrap select-none
      // touch-manipulation relative -translate-x-2/4 block px-[30px]
      // py-[5px] left-2/4 top-[200px];"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
      font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex 
      items-center dark:bg-blue-600 dark:hover:bg-blue-700 
      dark:focus:ring-blue-800 relative -translate-x-2/4 block px-[30px] 
      py-[5px] left-1/4 top-[200px];"
      placeholder="Choose date"
      value={value}
      onChange={chooseOption}
    >
      {options}
    </select>
  );
}
