import { Range } from '@/src/models/range';
import { VacationType } from '@/src/models/vacationType';

interface CalendarDay {
  day: number;
  type?: VacationType;
}

const colorVariants: Record<VacationType, string> = {
  unpaid: 'bg-dayoff-unpaid',
  parental: 'bg-dayoff-parental',
  vacation: 'bg-dayoff-vacation',
};

export function Grid({ ranges }: { ranges: Range[] }) {
  const calendarDays = Array.from({ length: 35 }, (_, index): CalendarDay => ({ day: index + 1 }));

  ranges.forEach((range) => {
    for (let day = range.start; day <= range.end; day++) {
      calendarDays[day].type = range.type;
    }
  });

  return (
    <div
      className="grid grid-cols-[repeat(7,1fr)] auto-rows-[1fr] gap-0 w-[500px] h-[500px] justify-center 
    absolute translate-x-[-30%] -translate-y-2/4 left-[30%] top-2/4"
    >
      {calendarDays.map((calendarDay) => (
        <div
          key={calendarDay.day}
          className={`flex items-center justify-center rounded-[1%] number border border-grey 
            ${calendarDay.type ? 'selected ' + colorVariants[calendarDay.type] : 'bg-mediumgrey'}`}
        >
          {calendarDay.day}
        </div>
      ))}
    </div>
  );
}
