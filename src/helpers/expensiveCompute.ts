import { Item } from "../interface/Item";

export const itemsList : Item[] = new Array(
  29496729
).fill(0).map((_, index) => {
  return { id: index, isSelected: index === 29496720 };
});
