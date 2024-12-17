export const isObjectEmpty = (object) => {
  // Ensure the input is an object
  if (typeof object !== "object" || object === null) {
    throw new Error("Input must be a non-null object");
  }

  // Check if at least one attribute is null, undefined, or an empty string
  return Object.values(object).some(
    (value) => value === null || value === undefined || value === ""
  );
};
