import { useState } from "react";
import {
  Button,
  Card,
  Col,
  message,
  Row,
  Space,
  Steps,
  Typography,
} from "antd";
import { InputFloat } from "@/components/Input";
import PolicyTable from "./components/PolicyTable";
import BuyerForm from "./components/BuyerForm";

const { Text } = Typography;

const App = () => {
  const [current, setCurrent] = useState(1);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: "Insured Objects",
      content: (
        <div>
          <Space className="d-flex justify-end mb-4">
            <InputFloat width="250px" />
            <Button type="primary">Add</Button>
          </Space>
          <div>
            <PolicyTable />
          </div>
        </div>
      ),
    },
    {
      title: "Buyer Information",
      content: (
       <BuyerForm />
      ),
    },
    {
      title: "Done",
      content: "Last-content",
    },
  ];
  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <Row gutter={[50, 50]}>
      <Col xs={24} md={19}>
        <Steps current={current} items={items} className="mb-4" />
        <div>{steps[current].content}</div>
        <div className="d-flex justify-endmt-4">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button className="mx-2" onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </Col>
      <Col xs={6} md={5}>
        <Card title="Summary">
          <p>
            <Text strong>Creation Date: </Text>
            2023/30/11
          </p>
          <p>
            <Text strong>Fee: </Text>
            $1100.00
          </p>
        </Card>
      </Col>
    </Row>
  );
};

export default App;
