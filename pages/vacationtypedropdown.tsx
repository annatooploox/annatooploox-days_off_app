import React from 'react';

export default function VacationTypedropdown({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const vacationType = ['vacation', 'unpaid', 'parental'];

  const options = vacationType.map((elem) => (
    <option key={elem} value={elem}>
      {elem}
    </option>
  ));

  const chooseOption: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const selectedOption = event.target.value;
    onChange(selectedOption);
    console.log(selectedOption);
  };

  // plus margines ujemny (połowa gapa - bo z prawej i z lewej)
  // aby nie wychodziło poza contener to ustawiamy... overflow:hidden na kontenerze

  return (
    <select
      className="bg-lightgrey list-style-type: none display: inline; cursor-pointer text-sm font-medium leading-[10px] text-center transition-all duration-200 whitespace-nowrap select-none touch-manipulation relative -translate-x-2/4 block px-[30px] py-[5px] left-2/4 top-[200px];"
      placeholder="Choose day off type"
      value={value}
      onChange={chooseOption}
    >
      {options}
    </select>
  );
}
