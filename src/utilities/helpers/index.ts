import moment from "moment";
import { formattedDate } from "@/configs";

export const parseCurrency = (value: number) => {
  return `$${value.toFixed(2)}`;
};
export const parseUTC = (date: string, format = null) => {
  if (!date) return "";
  return moment(date).format(format ?? formattedDate);
};
