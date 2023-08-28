import { VacationType } from '@/src/models/vacationType';

export default function Grid({
  startNumber,
  endNumber,
  vacationType,
}: {
  startNumber: number;
  endNumber: number;
  vacationType: VacationType;
}) {
  const numbers = Array.from({ length: 35 }, (_, index) => index + 1);

  const colorVariants: Record<VacationType, string> = {
    unpaid: 'bg-dayoff-unpaid',
    parental: 'bg-dayoff-parental',
    vacation: 'bg-dayoff-vacation',
  };

  const isNumberSelected = (number: number): boolean => {
    return number >= startNumber && number <= endNumber;
  };

  return (
    <div
      className="grid grid-cols-[repeat(7,1fr)] auto-rows-[1fr] gap-0 w-[500px] h-[500px] justify-center 
    absolute translate-x-[-30%] -translate-y-2/4 left-[30%] top-2/4"
    >
      {numbers.map((number) => (
        <div
          key={number}
          className={`flex items-center justify-center rounded-[1%] number border border-grey 
            ${
              isNumberSelected(number) ? 'selected ' + colorVariants[vacationType] : 'bg-mediumgrey'
            }`}
        >
          {number}
        </div>
      ))}
    </div>
  );
}
