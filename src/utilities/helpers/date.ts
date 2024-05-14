import { formattedDate } from "@/configs";
import { DateType } from "@/types/Date";
import dayjs from "dayjs";

export const parseUTC = (date: DateType, format = null) => {
  // parse date to formatted date, default "YYYY/MM/DD"
  if (!date) return "";
  return dayjs(date).format(format ?? formattedDate);
};
export const calculateAge = (birthDate: DateType): number => {
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
export const disabledFutureDate = (currentDate: dayjs.Dayjs) => {
  // used to disable future date
  const today = dayjs();
  const currentDateJs = dayjs.isDayjs(currentDate)
    ? currentDate
    : dayjs(currentDate);
  return currentDateJs.isAfter(today);
};

export function isStartDateGreaterThanEndDate(
  startDate: DateType,
  endDate: DateType
): boolean {
  const startDateObj = dayjs.isDayjs(startDate) ? startDate : dayjs(startDate);
  const endDateObj = dayjs.isDayjs(endDate) ? endDate : dayjs(endDate);
  return startDateObj.isAfter(endDateObj);
}
