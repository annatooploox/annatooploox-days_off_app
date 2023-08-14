import React from 'react';

import { VacationType } from './grid';

import { includes } from '@/src/utils/includes';

const vacationTypes: VacationType[] = ['vacation', 'unpaid', 'parental'];

export default function VacationTypedropdown({
  value,
  onChange,
}: {
  value: VacationType;
  onChange: (value: VacationType) => void;
}) {
  const options = vacationTypes.map((vacationType) => (
    <option key={vacationType} value={vacationType}>
      {vacationType}
    </option>
  ));

  const chooseOption: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const selectedOption = event.target.value;
    if (includes(vacationTypes, selectedOption)) {
      onChange(selectedOption);
    }
    console.log(selectedOption);
  };

  // plus margines ujemny (połowa gapa - bo z prawej i z lewej)
  // aby nie wychodziło poza contener to ustawiamy... overflow:hidden na kontenerze

  return (
    <select
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative -translate-x-2/4 block px-[30px] py-[5px] left-2/4 top-[200px];"
      placeholder="Choose day off type"
      value={value}
      onChange={chooseOption}
    >
      {options}
    </select>
  );
}
