import { ControllerField } from "@/components";
import { FieldType, genderList } from "@/utilities/constants";
import { Col, DatePicker, Input, Select } from "antd";
import { Control } from "react-hook-form";

const renderGeneralInfo = (
  control: Control<any>,
  isDetail: boolean = false
) => {
  return (
    <>
      <Col xs={24} md={8}>
        <ControllerField
          control={control}
          name="fullName"
          label="Full name"
          rules={{ required: true }}
          component={Input}
          componentProps={{ disabled: isDetail }}
        />
      </Col>
      <Col xs={24} md={8}>
        <ControllerField
          control={control}
          name="dateOfBirth"
          label="Date of Birth"
          rules={{ required: true }}
          component={DatePicker}
          fieldType={FieldType.DATE}
          componentProps={{
            className: "w-full",
            disabled: isDetail,
          }}
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
            disabled: isDetail,
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
          componentProps={{ disabled: isDetail }}
        />
      </Col>
      <Col xs={24} md={8}>
        <ControllerField
          control={control}
          name="dateOfIssue"
          label="Date of Issue"
          rules={{ required: true }}
          component={DatePicker}
          fieldType={FieldType.DATE}
          componentProps={{
            className: "w-full",
            disabled: isDetail,
          }}
        />
      </Col>
      <Col xs={24} md={8}>
        <ControllerField
          control={control}
          name="placeOfIssue"
          label="Place of Issue"
          rules={{ required: true }}
          component={Input}
          componentProps={{ disabled: isDetail }}
        />
      </Col>
    </>
  );
};

export default renderGeneralInfo;
