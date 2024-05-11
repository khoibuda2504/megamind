import { PolicyType } from "@/types/policy";
import { parseCurrency, parseUTC } from "@/utilities/helpers";
import { Table } from "antd";

const PolicyTable = ({ policies }: { policies: PolicyType[] }) => {
  const columns = [
    {
      title: "No.",
      key: "id",
      dataIndex: "id",
      //@ts-ignore
      render: (v: string, rd: Policy, idx: number) => idx + 1,
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "ID/Passport Number",
      dataIndex: "idNumber",
      key: "idNumber",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
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
    <Table
      rowKey="id"
      dataSource={policies}
      columns={columns}
      pagination={false}
    />
  );
};

export default PolicyTable;
