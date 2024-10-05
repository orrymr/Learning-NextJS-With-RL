interface OgGridProps {
  rows: number;
  cols: number;
}

export default function OgGrid({ rows, cols }: OgGridProps) {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="grid grid-cols-4 grid-rows-13 bg-blue-400">
      {numbers.map((number) => (
        <div className="border">{number}</div>
      ))}
    </div>
  );
}
