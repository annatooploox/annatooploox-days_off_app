import { useState } from 'react';

import { Grid } from '@/src/components/grid';
import { Sidebar } from '@/src/components/sidebar';
import { addRange, Range } from '@/src/models/range';

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);
  const [ranges, setRanges] = useState<Range[]>([
    {
      start: 1,
      end: 5,
      type: 'vacation',
    },
    {
      start: 7,
      end: 13,
      type: 'parental',
    },
  ]);

  const [newRange, setNewRange] = useState<Range>({ start: 1, end: 1, type: 'vacation' });

  const [overwrite, setOverwrite] = useState(false);

  const openSidebar = () => {
    setIsOpen(true);
  };

  const handleSave = () => {
    setRanges(addRange(ranges, newRange, overwrite));
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
    setRanges(ranges);
  };

  return (
    <div className="App">
      <Grid ranges={ranges} />
      <Sidebar
        openSidebar={openSidebar}
        newRange={newRange}
        setNewRange={setNewRange}
        isOpen={isOpen}
        handleSave={handleSave}
        handleCancel={handleCancel}
        overwrite={overwrite}
        setOverwrite={setOverwrite}
      />
    </div>
  );
}
