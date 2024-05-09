import {
  Button,
  Card,
  Col,
  Row,
  Space,
  Typography,
} from "antd";
import { InputFloat } from "@/components/Input";
import PolicyTable from "./components/PolicyTable";
import BuyerForm from "./components/BuyerForm";
import { useModalStore } from "@/store";
import PolicyForm from "./components/PolicyForm";
import StepProcess from "@/components/StepProcess";
import { parseCurrency } from "@/utilities/helpers";

const { Text } = Typography;

const Product = () => {
  const { setIsModalOpen, setContent } = useModalStore();

  const steps = [
    {
      title: "Insured Objects",
      content: (
        <div>
          <Space className="flex justify-end mb-4">
            <InputFloat width="250px" />
            <Button
              type="primary"
              onClick={() => {
                setIsModalOpen(true);
                setContent(<PolicyForm />);
              }}
            >
              Add
            </Button>
          </Space>
          <div>
            <PolicyTable />
          </div>
        </div>
      ),
    },
    {
      title: "Buyer Information",
      content: <BuyerForm />,
    },
    {
      title: "Done",
      content: "Last-content",
    },
  ];

  return (
    <Row gutter={[50, 50]}>
      <Col xs={24} md={19}>
        <StepProcess steps={steps} />
      </Col>
      <Col xs={6} md={5}>
        <Card title="Summary">
          <p>
            <Text strong>Creation Date: </Text>
            2023/30/11
          </p>
          <p>
            <Text strong>Fee: </Text>
            {parseCurrency(1100)}
          </p>
        </Card>
      </Col>
    </Row>
  );
};

export default Product;
