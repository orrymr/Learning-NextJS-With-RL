interface GridDimensionControlsProps {
  rows: number;
  cols: number;
  setRows: (value: number) => void;
  setCols: (value: number) => void;
}

export default function GridDimensionControls({
  rows,
  cols,
  setRows,
  setCols,
}: GridDimensionControlsProps) {
  const handleRowsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setRows(value);
  };

  const handleColsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setCols(value);
  };

  return (
    <div className="grid-dimension-controls mb-4 space-x-4 flex items-center justify-center">
      <div>
        <label className="block text-sm font-medium text-purple-200">
          Rows
        </label>
        <input
          type="number"
          value={rows}
          onChange={handleRowsChange}
          placeholder="Rows"
          className="border p-2 rounded w-24"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-purple-200">
          Columns
        </label>
        <input
          type="number"
          value={cols}
          onChange={handleColsChange}
          placeholder="Columns"
          className="border p-2 rounded w-24"
        />
      </div>

      <button
        className="bg-purple-500 text-white px-4 py-2 rounded">Start!</button>
    </div>
  );
}
