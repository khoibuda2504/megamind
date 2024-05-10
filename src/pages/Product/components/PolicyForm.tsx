import { UICheckbox } from "@/components/Checkbox";
import StepProcess from "@/components/StepProcess";
import { parseCurrency } from "@/utilities/helpers";
import { Card, Col, DatePicker, Input, Row, Select } from "antd";
import {
  genderList,
  relationshipList,
  insurancePackageList,
} from "@/constants";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import FieldFloat from "@/components/FieldFloat";

type Inputs = {
  fullName: string;
  dateOfBirth: string;
  gender: string;
  idPassportNumber: string;
  dateOfIssue: string;
  placeOfIssue: string;
  address: string;
  relationship: string;
};
const PolicyForm = () => {
  const { handleSubmit, watch, control } = useForm<Inputs>();
  console.log("watch", watch("fullName"));
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const steps = [
    {
      title: "Insured Object Information",
      content: (
        <Card>
          <h4 className="primary-title">General Information</h4>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={8}>
              <Controller
                name="fullName"
                control={control}
                render={({ field }) => (
                  <FieldFloat textFloat="Full name">
                    <Input {...field} />
                  </FieldFloat>
                )}
              />
            </Col>
            <Col xs={24} md={8}>
              <Controller
                name="dateOfBirth"
                control={control}
                render={({ field }) => (
                  <FieldFloat textFloat="Date of Birth">
                    <DatePicker className="w-full" {...field} />
                  </FieldFloat>
                )}
              />
            </Col>
            <Col xs={24} md={8}>
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <FieldFloat textFloat="Gender">
                    <Select
                      className="w-full"
                      {...field}
                      options={genderList}
                    />
                  </FieldFloat>
                )}
              />
            </Col>
            <Col xs={24} md={8}>
              <Controller
                name="idPassportNumber"
                control={control}
                render={({ field }) => (
                  <FieldFloat textFloat="ID/Passport Number">
                    <Input {...field} />
                  </FieldFloat>
                )}
              />
            </Col>
            <Col xs={24} md={8}>
              <Controller
                name="dateOfIssue"
                control={control}
                render={({ field }) => (
                  <FieldFloat textFloat="Date of Issue">
                    <DatePicker className="w-full" {...field} />
                  </FieldFloat>
                )}
              />
            </Col>
            <Col xs={24} md={8}>
              <Controller
                name="placeOfIssue"
                control={control}
                render={({ field }) => (
                  <FieldFloat textFloat="Place of Issue">
                    <Input {...field} />
                  </FieldFloat>
                )}
              />
            </Col>
            <Col xs={24} md={8}>
              <Controller
                name="relationship"
                control={control}
                render={({ field }) => (
                  <FieldFloat textFloat="Relationship">
                    <Select
                      className="w-full"
                      {...field}
                      options={relationshipList}
                    />
                  </FieldFloat>
                )}
              />
            </Col>
          </Row>
        </Card>
      ),
    },
    {
      title: "Insurance Package",
      content: (
        <>hehe</>
        // <Card>
        //   <h4 className="font-bold">General Information</h4>
        //   <Row gutter={[16, 16]}>
        //     <Col xs={24} md={8}>
        //       <SelectFloat options={insurancePackageList} />
        //     </Col>
        //     <Col xs={24} md={8}>
        //       <DatePickerFloat textFloat="Start Date" />
        //     </Col>
        //     <Col xs={24} md={8}>
        //       <DatePickerFloat textFloat="End Date" />
        //     </Col>
        //   </Row>
        //   <h4>Mandatory Insurance Benefits</h4>
        //   <UICheckbox className="mb-3" disabled checked>
        //     <p>Death and permanent total disability due to accident/year.</p>
        //     <p>Insurance amount: {parseCurrency(50000)}</p>
        //   </UICheckbox>
        //   <UICheckbox className="mb-3" disabled checked>
        //     <p>Death and permanent total disability due to disease/year.</p>
        //     <p>Insurance amount: {parseCurrency(50000)}</p>
        //   </UICheckbox>
        //   <UICheckbox className="mb-3" disabled checked>
        //     <p>Medical expenses due to accidents/year</p>
        //     <p>Insurance amount: {parseCurrency(10000)}</p>
        //   </UICheckbox>
        //   <UICheckbox disabled checked>
        //     <p>Medical expenses due to accidents/year</p>
        //     <p>Insurance amount: {parseCurrency(10000)}</p>
        //   </UICheckbox>
        //   <h4 className="mt-4">Additional Insurance Benefits</h4>
        //   <UICheckbox>
        //     <p>Outpatient treatment/year (+{parseCurrency(100)})</p>
        //     <p>Insurance amount: {parseCurrency(20000)}</p>
        //   </UICheckbox>
        //   <UICheckbox>
        //     <p>Dental examination and treatment/year (+{parseCurrency(75)})</p>
        //     <p>Insurance amount: {parseCurrency(15000)}</p>
        //   </UICheckbox>
        // </Card>
      ),
    },
  ];
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StepProcess steps={steps} />
    </form>
  );
};

export default PolicyForm;
