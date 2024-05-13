import { ControllerField } from "@/components";
import { Col, Input, Row } from "antd";
import { renderGeneralInfo } from "../components";
import { Control } from "react-hook-form";
import { BuyerType } from "../types";

const BuyerForm = ({
  control,
  isDetail = false,
}: {
  control: Control<BuyerType, any>;
  isDetail?: boolean;
}) => {
  return (
    <div>
      <h4 className="primary-title">General Information</h4>
      <Row gutter={[16, 16]}>
        {renderGeneralInfo(control, isDetail)}
        <Col xs={24}>
          <ControllerField
            control={control}
            name="address"
            label="Address"
            rules={{ required: true }}
            component={Input}
            componentProps={{ disabled: isDetail }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default BuyerForm;
