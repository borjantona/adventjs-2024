function fixGiftList(
  received: string[],
  expected: string[]
): { missing: Record<string, number>; extra: Record<string, number> } {
  const toys = {
    missing: {},
    extra: {},
  };
  let countReceived = received.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  let countExpected = expected.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  for (const toy in countExpected) {
    if (countReceived[toy] && countReceived[toy] !== countExpected[toy]) {
      if (countReceived[toy] > countExpected[toy]) {
        toys.extra[toy] = countReceived[toy] - countExpected[toy];
      } else {
        toys.missing[toy] = countExpected[toy] - countReceived[toy];
      }
    } else if (!countReceived[toy]) {
      toys.missing[toy] = countExpected[toy];
    }
  }

  for (const toy in countReceived) {
    if (!countExpected[toy]) {
      toys.extra[toy] = countReceived[toy];
    }
  }

  return toys;
}

fixGiftList(
  ["puzzle", "car", "doll", "car"],
  ["car", "puzzle", "doll", "ball"]
);
// Devuelve:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

fixGiftList(
  ["book", "train", "kite", "train"],
  ["train", "book", "kite", "ball", "kite"]
);
// Devuelve:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

fixGiftList(
  ["bear", "bear", "car"],
  ["bear", "car", "puzzle", "bear", "car", "car"]
);
// Devuelve:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

fixGiftList(["bear", "bear", "car"], ["car", "bear", "bear"]);
// Devuelve:
// {
//   missing: {},
//   extra: {}
// }
