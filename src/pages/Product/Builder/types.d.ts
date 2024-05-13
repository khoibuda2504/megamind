import { Gender, InsurancePackage, Relationship } from "@/utilities/constants";
import { Dayjs } from "dayjs";

type GeneralType = {
  fullName: string;
  dateOfBirth: string;
  gender: Gender;
  idNumber: string;
  dateOfIssue: string;
  placeOfIssue: string;
};
type BuyerType = {
  address: string;
} & GeneralType;
export type PolicyType = GeneralType & {
  id: string;
  age: number;
  relationship: Relationship;
  insurancePackage: InsurancePackage;
  startDate: string;
  endDate: string;
  outPatient: boolean;
  dental: boolean;
  fee: number;
};
export type ProductType = {
  policies: PolicyType[];
  buyerInfo: BuyerType;
  isDone: boolean;
  createdAt: string;
};
