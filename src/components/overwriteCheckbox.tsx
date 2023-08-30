export function OverwriteCheckbox({
  overwrite,
  setOverwrite,
}: {
  overwrite: boolean;
  setOverwrite: (value: boolean) => void;
}) {
  return (
    <>
      <div>
        <label htmlFor="overwriteCheckbox">
          <input
            type="checkbox"
            id="overwriteCheckbox"
            checked={overwrite}
            onChange={(e) => setOverwrite(e.target.checked)}
          />
          Overwrite
        </label>
      </div>
    </>
  );
}
