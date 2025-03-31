function isTreesSynchronized(
  tree1: { value: string; left?: any; right?: any } | undefined,
  tree2: { value: string; left?: any; right?: any } | undefined
): [boolean, string] {
  const flipTree = (tree) => {
    const treeFlipped = JSON.stringify(tree)
      .replaceAll("left", "newR")
      .replaceAll("right", "newL")
      .replaceAll("newR", "right")
      .replaceAll("newL", "left");

    return JSON.parse(treeFlipped);
  };

  function reorder(
    obj: { value: string; left?: any; right?: any } | undefined
  ) {
    if (obj && typeof obj === "object") {
      const reordered: { value?: string; left?: any; right?: any } | undefined =
        {};

      if (obj.value !== undefined) reordered.value = obj.value;

      if (obj.left !== undefined) reordered.left = reorder(obj.left);

      if (obj.right !== undefined) reordered.right = reorder(obj.right);

      return reordered;
    }
    return obj;
  }

  return [
    JSON.stringify(tree1) === JSON.stringify(reorder(flipTree(tree2))),
    tree1?.value || tree2?.value,
  ];
}

const tree10 = {
  value: "🎄",
  left: { value: "⭐" },
  right: { value: "🎅" },
};

const tree20 = {
  value: "🎄",
  left: { value: "🎅" },
  right: { value: "⭐" },
};

isTreesSynchronized(tree10, tree20); // [true, '🎄']

/*
	tree10          tree20
	 🎄              🎄
	/ \             / \
  ⭐   🎅         🎅   ⭐
  */

const tree30 = {
  value: "🎄",
  left: { value: "🎅" },
  right: { value: "🎁" },
};

isTreesSynchronized(tree10, tree30); // [false, '🎄']

const tree4 = {
  value: "🎄",
  left: { value: "⭐" },
  right: { value: "🎅" },
};

isTreesSynchronized(tree10, tree4); // [false, '🎄']

isTreesSynchronized({ value: "🎅" }, { value: "🧑‍🎄" }); // [false, '🎅']
