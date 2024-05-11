import { ControllerField } from "@/components";
import { Col, Input, Row } from "antd";
import { renderGeneralInfo } from "../components";

const BuyerForm = ({ control }: any) => {
  return (
    <div>
      <h4>General Information</h4>
      <Row gutter={[16, 16]}>
        {renderGeneralInfo(control)}
        <Col xs={24}>
          <ControllerField
            control={control}
            name="address"
            label="Address"
            rules={{ required: true }}
            component={Input}
          />
        </Col>
      </Row>
    </div>
  );
};

export default BuyerForm;
