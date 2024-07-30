/**
 * Retrieves a map of grocery names and their quantity.
 * @returns {Map<string, Number>} The map of grocery items and their quantities.
 */
export default function groceriesList() {
  const values = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];
  return new Map(values);
}
