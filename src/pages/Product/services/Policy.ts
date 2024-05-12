import { mapPackage } from "@/utilities/constants";
import { PolicyType } from "@/types/policy";
import { calculateAge } from "@/utilities/helpers";
import { v4 as uuid } from "uuid";
export const mapData = (data: PolicyType, isEdit: boolean): PolicyType => {
  const id = uuid();
  let fee = 0;
  if (data.outPatient) {
    fee += 100;
  }
  if (data.dental) {
    fee += 75;
  }

  const age = calculateAge(new Date(data.dateOfBirth));
  if (age >= 16) {
    fee += mapPackage[data.insurancePackage as keyof typeof mapPackage];
  }
  return {
    ...data,
    fee,
    age,
    ...(!isEdit ? { id } : {})
  };
};
