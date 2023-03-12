export const recursivelyParseObject = (obj: { [key: string]: any }): any[] => {
  let resultArray: unknown[] = [];
  for (const [key, value] of Object.entries(obj)) {
    if (key === "__typename" || !value) continue;
    if (typeof value === "object" && !Array.isArray(value)) {
      resultArray.push([key, recursivelyParseObject(value)]);
    } else {
      resultArray.push([key, value]);
    }
  }
  return resultArray;
};
