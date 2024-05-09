import moment from "moment";
import { formattedDate } from "@/configs";

export const parseCurrency = (value: number) => {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
};
export const parseUTC = (date: string, format = null) => {
  if (!date) return "";
  return moment(date).format(format ?? formattedDate);
};
export const isUnderSixteen = (birthDate: moment.MomentInput): boolean => {
  const today = moment();
  const sixteenYearsAgo = today.subtract(16, "years");
  return (birthDate as moment.Moment).isAfter(sixteenYearsAgo);
};
