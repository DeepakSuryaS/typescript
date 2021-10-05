type Item = {
  id: string;
};

export const findItemIndexById = <T extends Item>(items: T[], id: string) => {
  return items.findIndex((item: T) => item.id === id);
};

export function overrideItemAtIndex<T>(array: T[], newItem: T, targetIndex: number) {
  return array.map((item, index) => {
    if (index !== targetIndex) return item;

    return newItem;
  });
}

export function removeItemAtIndex<T>(array: T[], index: number) {
  return [...array.splice(0, index), ...array.splice(index + 1)];
}

export function insertItemAtIndex<T>(array: T[], item: T, index: number) {
  return [...array.splice(0, index), item, ...array.splice(index + 1)];
}

export const moveItem = <T>(array: T[], from: number, to: number) => {
  const item = array[from];
  return insertItemAtIndex(removeItemAtIndex(array, from), item, to);
};
