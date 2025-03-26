function treeHeight(
  tree: { value: string; left: any; right: any } | null
): number {
  const calculateHeight = (
    tree: { value: string; left: any; right: any } | null,
    acum: number
  ): number => {
    if (!tree) return acum;
    else {
      return Math.max(
        calculateHeight(tree.left, acum + 1),
        calculateHeight(tree.right, acum + 1)
      );
    }
  };

  return calculateHeight(tree, 0);
}

// Definición del árbol
const treeD = {
  value: "🎁",
  left: {
    value: "🎄",
    left: {
      value: "⭐",
      left: null,
      right: null,
    },
    right: {
      value: "🎅",
      left: null,
      right: null,
    },
  },
  right: {
    value: "❄️",
    left: null,
    right: {
      value: "🦌",
      left: null,
      right: null,
    },
  },
};

// Representación gráfica del árbol:
//        🎁
//       /   \
//     🎄     ❄️
//    /  \      \
//  ⭐   🎅      🦌

// Llamada a la función
treeHeight(treeD);
// Devuelve: 3
