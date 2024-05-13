import { formattedDate } from "@/configs";
import dayjs, { Dayjs } from "dayjs";

export const parseCurrency = (value: number = 0) => {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
};
export const parseUTC = (date: Dayjs, format = null) => {
  if (!date) return "";
  return dayjs(date).format(format ?? formattedDate);
};
export const calculateAge = (birthDate: Dayjs): number => {
  const today = dayjs();
  const birthYear = dayjs(birthDate).year();
  const currentYear = today.year();

  // Calculate age considering months and days
  let age = currentYear - birthYear;
  const birthMonth = dayjs(birthDate).month();
  const currentMonth = today.month();

  // If birthday hasn't passed yet this year, subtract 1 from age
  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && today.date() < dayjs(birthDate).date())
  ) {
    age--;
  }

  return age;
};
