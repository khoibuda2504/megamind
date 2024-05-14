import { useModalStore } from "@/store";
import { InsuredObjectType } from "../types";
import { calculateAge, parseCurrency, parseUTC } from "@/utilities/helpers";
import { Table } from "antd";
import PolicyForm from "./PolicyForm";
import { DateType } from "@/types/Date";

type PolicyTableType = {
  insurances: InsuredObjectType[];
  onResponse: (data: InsuredObjectType) => void;
  isDone: boolean;
};

const PolicyTable = ({
  insurances,
  onResponse,
  isDone = false,
}: PolicyTableType) => {
  const { openModal } = useModalStore();
  const columns = [
    {
      title: "No.",
      key: "identity",
      dataIndex: "identity",
      //@ts-ignore
      render: (v: string, record: InsuredObjectType, idx: number) => idx + 1,
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
      render: (v: string, record: InsuredObjectType) => (
        <div
          className="cursor-pointer"
          onClick={() => {
            openModal(
              <PolicyForm
                onResponse={onResponse}
                {...(isDone ? { isDetail: true } : { isEdit: true })}
                initialData={record}
              />
            );
          }}
        >
          {v}
        </div>
      ),
    },
    {
      title: "ID/Passport Number",
      dataIndex: "idOrPassportNo",
      key: "idOrPassportNo",
    },
    {
      title: "Age",
      dataIndex: "dateOfBirth",
      key: "age",
      render: (dateOfBirth: DateType) => calculateAge(dateOfBirth),
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Relationship",
      dataIndex: "relationship",
      key: "relationship",
    },
    {
      title: "Package",
      dataIndex: "insurancePackage",
      key: "insurancePackage",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
      render: (v: string) => parseUTC(v),
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
      render: (v: string) => parseUTC(v),
    },
    {
      title: "Fee",
      dataIndex: "fee",
      key: "fee",
      render: (v: number) => parseCurrency(v),
    },
  ];
  return (
    <div className="overflow-auto shadow">
      <Table
        rowKey="identity"
        dataSource={insurances}
        columns={columns}
        pagination={false}
      />
    </div>
  );
};

export default PolicyTable;
