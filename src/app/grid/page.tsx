"use client";

import { useState } from "react";
import Grid from "@/app/ui/grid/grid";
import GridDimensionControls from "@/app/ui/grid/grid-dimension-conrols";

export default function Page() {
  const [rows, setRows] = useState(4);
  const [cols, setCols] = useState(4);

  return (
    <>
      <div className="relative h-screen">
        <div className="fixed top-0 left-0 right-0 bg-gray-700 bg-opacity-75 p-4 z-10">
          <GridDimensionControls
            rows={rows}
            cols={cols}
            setRows={setRows}
            setCols={setCols}
          />
        </div>
        <div className="pt-28 p-4">
          <Grid rows={rows} cols={cols} />
        </div>
      </div>
    </>
  );
}