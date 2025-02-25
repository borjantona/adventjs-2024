type Inventory = Array<{ name: string; quantity: number; category: string }>;

function organizeInventory(inventory: Inventory): object {
  const organizedInventory: { [key: string]: { [nameKey: string]: number } } =
    {};

  inventory.map((item) => {
    if (!organizedInventory[item.category]) {
      organizedInventory[item.category] = {};
    }
    if (!organizedInventory[item.category][item.name]) {
      organizedInventory[item.category][item.name] = 0;
    }
    organizedInventory[item.category][item.name] += item.quantity;
  });

  return organizedInventory;
}
