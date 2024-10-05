interface GridProps {
  rows: number;
  cols: number;
}

export default function Grid({ rows, cols }: GridProps) {
  const ballPosition = { row: 0, col: 0 };
  let valFunction = new ValFunction(rows, cols);



  return (
    <div
      className="grid"
      style={{
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
      }}
    >
      {Array.from({ length: rows * cols }).map((_, index) => {
        const row = Math.floor(index / cols);
        const col = index % cols;
        const isBallPosition =
          row === ballPosition.row && col === ballPosition.col;

        return (
          <div
            key={index}
            className="w-16 h-16 bg-blue-300 bg-opacity-45 border border-blue-500 flex items-center justify-center"
          >
            {isBallPosition && (
              <div className="w-8 h-8 bg-green-500 rounded-full"></div>
            )}
          </div>
        );
      })}
    </div>
  );
}
