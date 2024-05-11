import { Button, Card, Col, Input, Row, Space, Typography } from "antd";
import { BuyerForm, PolicyTable, PolicyForm } from "./ui";
import { useModalStore } from "@/store";
import StepProcess from "@/components/StepProcess";
import { parseCurrency } from "@/utilities/helpers";
import { FieldFloat } from "@/components";
import { useForm } from "react-hook-form";
import { useLocalStorage } from "@/hooks";
import { ProductType } from "@/types/policy";

const { Text } = Typography;

const Product = () => {
  const { openModal } = useModalStore();
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<any>({
    mode: "onBlur",
  });

  const [product, setProduct] = useLocalStorage<ProductType>(
    "product",
    {} as ProductType
  );
  const steps = [
    {
      title: "Insured Objects",
      content: (
        <div>
          <Space className="flex justify-end mb-4">
            <FieldFloat textFloat="Search">
              <Input />
            </FieldFloat>
            <Button
              type="primary"
              onClick={() => {
                openModal(<PolicyForm setProduct={setProduct} />);
              }}
            >
              Add
            </Button>
          </Space>
          <div>
            <PolicyTable policies={product.policies} />
          </div>
        </div>
      ),
    },
    {
      title: "Buyer Information",
      content: <BuyerForm control={control} />,
    },
    {
      title: "Done",
      content: "Last-content",
    },
  ];
  return (
    <Row gutter={[50, 50]}>
      <Col xs={24} md={17}>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <StepProcess
            steps={steps}
            callBackIsValid={(current) => {
              if (current === 0) {
                const length = product?.policies?.length ?? 0
                return length > 0;
              }
              return isValid;
            }}
          />
        </form>
      </Col>
      <Col xs={6} md={7}>
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
