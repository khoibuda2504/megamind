import { FieldFloat } from "@/components";
import { genderList } from "@/constants";
import { Col, Input, Row, Select } from "antd";

const BuyerForm = () => {
  return (
    <div>
      <h4>General Information</h4>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <FieldFloat textFloat="Full name">
            <Input />
          </FieldFloat>
        </Col>
        <Col xs={24} md={8}>
          <FieldFloat textFloat="Date of Birth">
            <Input />
          </FieldFloat>
        </Col>
        <Col xs={24} md={8}>
          <FieldFloat textFloat="Date of Birth">
            <Select options={genderList} />
          </FieldFloat>
        </Col>
        <Col xs={24} md={8}>
          <FieldFloat textFloat="ID/Passport Number">
            <Input />
          </FieldFloat>
        </Col>
        <Col xs={24} md={8}>
          <FieldFloat textFloat="Date of Issue">
            <Input />
          </FieldFloat>
        </Col>
        <Col xs={24} md={8}>
          <FieldFloat textFloat="Place of Issue">
            <Input />
          </FieldFloat>
        </Col>
        <Col xs={24}>
          <FieldFloat textFloat="Address">
            <Input />
          </FieldFloat>
        </Col>
      </Row>
    </div>
  );
};

export default BuyerForm;
