import { InputFloat } from "@/components/Input";
import { SelectFloat } from "@/components/Select";
import { genderList } from "@/constants";
import { Col, Row } from "antd";

const BuyerForm = () => {
  return (
    <div>
      <h4>General Information</h4>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <InputFloat textFloat="Full name" />
        </Col>
        <Col xs={24} md={8}>
          <InputFloat textFloat="Date of Birth" />
        </Col>
        <Col xs={24} md={8}>
          <SelectFloat options={genderList} />
        </Col>
        <Col xs={24} md={8}>
          <InputFloat textFloat="ID/Passport Number" />
        </Col>
        <Col xs={24} md={8}>
          <InputFloat textFloat="Date of Issue" />
        </Col>
        <Col xs={24} md={8}>
          <InputFloat textFloat="Place of Issue" />
        </Col>
        <Col xs={24}>
          <InputFloat textFloat="Address" />
        </Col>
      </Row>
    </div>
  );
};

export default BuyerForm;
