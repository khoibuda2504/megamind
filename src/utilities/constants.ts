export const genderList = [
  {
    label: "Male",
    value: "Male",
  },
  {
    label: "Female",
    value: "Female",
  },
];
export const relationshipList = [
  {
    label: "Self",
    value: "Self",
  },
  {
    label: "Spouse",
    value: "Spouse",
  },
  {
    label: "Children",
    value: "Children"
  }
]
export const insurancePackageList = [
  {
    label: "Golden",
    value: "Golden",
  },
  {
    label: "Silver",
    value: "Silver",
  },
  {
    label: "Bronze",  
    value: "Bronze",
  }
]
export const mapPackage = {
  "Golden": 500,
  "Silver": 300,
  "Bronze": 150
}
export enum FieldType {
  DATE= "DATE",
  CHECKBOX= "CHECKBOX"
}

export enum Gender {
  Male = "Male",
  Female = "Female",
}
export enum Relationship {
  Self = "Self",
  Spouse = "Spouse",
  Children = "Children"
}
export enum InsurancePackage {
  Golden = "Golden",
  Silver = "Silver",
  Bronze = "Bronze"
}