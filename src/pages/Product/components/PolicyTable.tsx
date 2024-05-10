import { Policy } from "@/types/policy";
import { parseCurrency, parseUTC } from "@/utilities/helpers";
import { Table } from "antd";

const PolicyTable = () => {
  const dataSource = [
    {
      id: "1",
      fullName: "Mike",
      idNumber: 6781212837,
      gender: "Male",
      relationship: "Self",
      package: "Golden",
      age: 32,
      address: "10 Downing Street",
      fee: 500,
      startDate: "2024-04-02T04:49:56.623Z",
      endDate: "2024-04-02T04:49:56.623Z",
    },
  ];

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
      dataIndex: "package",
      key: "package",
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
  return <Table rowKey="id" dataSource={dataSource} columns={columns} pagination={false} />;
};

export default PolicyTable;
