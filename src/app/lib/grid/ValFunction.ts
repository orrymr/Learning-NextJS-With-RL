class ValFunction {
    private valFunction: number[][];
    private goalCell = { row: 0, col: 0 };

    constructor(rows: number, cols: number) {
        this.valFunction = [];
        for (let i = 0; i < rows; i++) {
            const row: number[] = [];
            for (let j = 0; j < cols; j++) {
                row.push(0); // Fill with zeroes
            }
            this.valFunction.push(row);
        }
    }

    public getFunction(): number[][] {
        return this.valFunction;
    }

    public setGoalCell(row: number, col: number): void {
        this.goalCell = { row, col };
    }

    public getGoalCell(): { row: number; col: number } {
        return this.goalCell;
    }

    public setValueAtCell(row: number, col: number, value: number): void {
        this.valFunction[row][col] = value;
    }
}
