import { Gender, InsurancePackage, Relationship } from "@/utilities/constants";
import { Dayjs } from "dayjs";

type GeneralType = {
  fullName: string;
  dateOfBirth: string;
  gender: Gender;
  idOrPassportNo: string;
  dateOfIssue: string;
  placeOfIssue: string;
};
type BuyerType = {
  address: string;
} & GeneralType;
export type InsuredObjectType = GeneralType & {
  identity: string;
  age: number;
  relationship: Relationship;
  insurancePackage: InsurancePackage;
  startDate: string;
  endDate: string;
  isOutPatient: boolean;
  isDental: boolean;
  fee: number;
};
export type ProductType = {
  insurances: InsuredObjectType[];
  buyerInfo: BuyerType;
  isDone: boolean;
  createdAt: string;
};
