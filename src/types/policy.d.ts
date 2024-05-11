type GeneralType = {
  fullName: string;
  dateOfBirth: string;
  gender: string;
  idNumber: number;
  dateOfIssue: string;
  placeOfIssue: string;
};
type BuyerType = {
  address: string
} & GeneralType
export type PolicyType = GeneralType & {
  id: string;
  age: number;
  relationship: string;
  insurancePackage: string;
  startDate: string;
  endDate: string;
  outPatient: boolean;
  dental: boolean;
  fee: number
};
export type ProductType =  {
  policies: PolicyType[],
  buyerInfo: BuyerType
}