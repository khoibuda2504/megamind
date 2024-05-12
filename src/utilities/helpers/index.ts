import moment, { Moment } from "moment";
import { formattedDate } from "@/configs";

export const parseCurrency = (value: number = 0) => {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
};
export const parseUTC = (date: string | Date | Moment, format = null) => {
  if (!date) return "";
  return moment(date).format(format ?? formattedDate);
};
export const calculateAge = (birthDate: Date): number => {
  const dob = moment(birthDate);
  const today = moment();
  const age = today.diff(dob, "years");
  return age;
};
