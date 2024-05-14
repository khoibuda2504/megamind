export const parseCurrency = (value: number = 0) => {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
};