import { useState } from 'react';

export default function Overwrite_checkbox() {
  const [checked, setChecked] = useState(false);

  function handleChange(e: { target: { checked: boolean | ((prevState: boolean) => boolean) } }) {
    setChecked(e.target.checked);
  }

  return (
    <>
      <div>
        <h4> Overwrite dates</h4>
        <input value="overwrite" type="checkbox" onChange={handleChange} />
        <br></br>
        {checked ? <div> Checked </div> : <div> Not checked </div>}
      </div>
    </>
  );
}
