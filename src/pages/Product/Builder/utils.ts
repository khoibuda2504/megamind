import { mapPackage } from "@/utilities/constants";
import { InsuredObjectType } from "./types";
import { calculateAge } from "@/utilities/helpers";
import { v4 as uuid } from "uuid";
/**
 * Maps data from an InsuredObjectType to an InsuredObjectType, adding fields for fee and identity if isEdit is false
 * @param {InsuredObjectType} data - The data to map
 * @param {boolean} isEdit - Whether the data is being edited or not
 * @returns {InsuredObjectType} - The mapped data
 */
export const mapData = (
  data: InsuredObjectType,
  isEdit: boolean
): InsuredObjectType => {
  const identity = uuid();

  // Calculate the fee based on the data
  let fee = 0;
  if (data.isOutPatient) {
    fee += 100;
  }
  if (data.isDental) {
    fee += 75;
  }

  const age = calculateAge(new Date(data.dateOfBirth));
  if (age >= 16) {
    fee += mapPackage[data.insurancePackage as keyof typeof mapPackage];
  }

  return {
    ...data,
    fee,
    // If isEdit is false, add field identity to the data
    ...(!isEdit ? { identity } : {}),
  };
};
