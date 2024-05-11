import { ControllerField } from "@/components";
import { genderList } from "@/constants";
import { Col, DatePicker, Input, Select } from "antd";
import { Control, FieldValues } from "react-hook-form";

const renderGeneralInfo = <T extends FieldValues>(control: Control<T, any>) => {
  return (
    <>
      <Col xs={24} md={8}>
        <ControllerField
          control={control}
          name="fullName"
          label="Full name"
          rules={{ required: true }}
          component={Input}
        />
      </Col>
      <Col xs={24} md={8}>
        <ControllerField
          control={control}
          name="dateOfBirth"
          label="Date of Birth"
          rules={{ required: true }}
          component={DatePicker}
          componentProps={{ className: "w-full" }}
        />
      </Col>
      <Col xs={24} md={8}>
        <ControllerField
          control={control}
          name="gender"
          label="Gender"
          rules={{ required: true }}
          component={Select}
          componentProps={{
            className: "w-full",
            options: genderList,
          }}
        />
      </Col>
      <Col xs={24} md={8}>
        <ControllerField
          control={control}
          name="idNumber"
          label="ID/Passport Number"
          rules={{ required: true }}
          component={Input}
        />
      </Col>
      <Col xs={24} md={8}>
        <ControllerField
          control={control}
          name="dateOfIssue"
          label="Date of Issue"
          rules={{ required: true }}
          component={DatePicker}
          componentProps={{ className: "w-full" }}
        />
      </Col>
      <Col xs={24} md={8}>
        <ControllerField
          control={control}
          name="placeOfIssue"
          label="Place of Issue"
          rules={{ required: true }}
          component={Input}
        />
      </Col>
    </>
  );
};

export default renderGeneralInfo;
