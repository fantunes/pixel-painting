function makeGrid() {
  const rows = 9;
  const cols = 9;
  let gridRows = [];

  for (let i = 0; i < rows; i++) {
    gridRows.push(Array.from(Array(cols), () => '◻️'));
  }

  return gridRows;
}

const buildGrid = makeGrid();

const coords = [
  { x: 0, y: 2 },
  { x: 3, y: 4 }
];

coords.map(row => {
  buildGrid[row.x][row.y] = '◼️';
})

console.table(buildGrid);