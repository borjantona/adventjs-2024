function drawTable(data: Array<Record<string, string | number>>): string {
  function capitalizeFirstLetter(val: string | number): string {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }

  function makeRow(values: (string | number)[], colWidths: number[]): string {
    return (
      "| " +
      values.map((val, i) => String(val).padEnd(colWidths[i])).join(" | ") +
      " |"
    );
  }

  const keys = Object.keys(data[0]);

  const colWidths = keys.map((key) =>
    Math.max(
      key.length,
      ...data.map((row) => (row[key] ?? "").toString().length)
    )
  );

  const separation =
    "+" + colWidths.map((width) => "-".repeat(width + 2)).join("+") + "+";
  const header = makeRow(keys.map(capitalizeFirstLetter), colWidths);
  const rows = data.map((row) =>
    makeRow(
      keys.map((key) => row[key] ?? ""),
      colWidths
    )
  );

  return [separation, header, separation, ...rows, separation].join("\n");
}

drawTable([
  { name: "Alice", city: "London" },
  { name: "Bob", city: "Paris" },
  { name: "Charlie", city: "New York" },
]);
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

drawTable([
  { gift: "Doll", quantity: 10 },
  { gift: "Book", quantity: 5 },
  { gift: "Music CD", quantity: 1 },
]);
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+
