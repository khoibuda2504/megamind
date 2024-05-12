import { UICheckbox } from "@/components/Checkbox";
import StepProcess from "@/components/StepProcess";
import { parseCurrency } from "@/utilities/helpers";
import { Card, Checkbox, Col, DatePicker, Row, Select } from "antd";
import { relationshipList, insurancePackageList } from "@/utilities/constants";
import { SubmitHandler, useForm } from "react-hook-form";
import { ControllerField } from "@/components";
import { renderGeneralInfo } from "../components";
import { PolicyType } from "@/types/policy";
import { mapData } from "../services/Policy";
import { useModalStore } from "@/store";

interface IPolicyForm {
  onResponse: (data: PolicyType) => void;
  isEdit?: boolean;
  isDetail?: boolean;
  initialData?: PolicyType;
}

const PolicyForm = ({
  onResponse,
  isDetail = false,
  isEdit = false,
  initialData,
}: IPolicyForm) => {
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<PolicyType>({
    mode: "onBlur",
    ...(isDetail || isEdit
      ? {
          defaultValues: initialData,
        }
      : {}),
  });
  const { closeModal } = useModalStore();
  const onSubmit: SubmitHandler<PolicyType> = (data) => {
    onResponse(mapData(data, isEdit));
    closeModal();
  };
  const steps = [
    {
      title: "Insured Object Information",
      content: (
        <Card>
          <h4 className="primary-title">General Information</h4>
          <Row gutter={[16, 16]}>
            {renderGeneralInfo(control)}
            <Col xs={24} md={8}>
              <ControllerField
                control={control}
                name="relationship"
                label="Relationship"
                rules={{ required: true }}
                component={Select}
                componentProps={{
                  className: "w-full",
                  options: relationshipList,
                }}
              />
            </Col>
          </Row>
        </Card>
      ),
    },
    {
      title: "Insurance Package",
      content: (
        <Card>
          <h4 className="primary-title mt-2">General Information</h4>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={8}>
              <ControllerField
                control={control}
                name="insurancePackage"
                label="Insurance Package"
                rules={{ required: true }}
                component={Select}
                componentProps={{
                  className: "w-full",
                  options: insurancePackageList,
                }}
              />
            </Col>
            <Col xs={24} md={8}>
              <ControllerField
                control={control}
                name="startDate"
                label="Start Date"
                rules={{ required: true }}
                component={DatePicker}
                componentProps={{ className: "w-full", isDate: true }}
              />
            </Col>
            <Col xs={24} md={8}>
              <ControllerField
                control={control}
                name="endDate"
                label="End Date"
                rules={{ required: true }}
                component={DatePicker}
                componentProps={{ className: "w-full", isDate: true }}
              />
            </Col>
          </Row>
          <h4 className="primary-title mt-2">Mandatory Insurance Benefits</h4>
          <UICheckbox className="mb-3">
            <p>Death and permanent total disability due to accident/year.</p>
            <p>Insurance amount: {parseCurrency(50000)}</p>
          </UICheckbox>
          <UICheckbox className="mb-3">
            <p>Death and permanent total disability due to disease/year.</p>
            <p>Insurance amount: {parseCurrency(50000)}</p>
          </UICheckbox>
          <UICheckbox className="mb-3">
            <p>Medical expenses due to accidents/year</p>
            <p>Insurance amount: {parseCurrency(10000)}</p>
          </UICheckbox>
          <UICheckbox>
            <p>Medical expenses due to accidents/year</p>
            <p>Insurance amount: {parseCurrency(10000)}</p>
          </UICheckbox>
          <h4 className="primary-title mt-2">Additional Insurance Benefits</h4>
          <ControllerField
            control={control}
            name="outPatient"
            component={Checkbox}
            componentProps={{
              isCheckbox: true,
              rootClassName: "ui-checkbox",
            }}
          >
            <p>Outpatient treatment/year (+{parseCurrency(100)})</p>
            <p>Insurance amount: {parseCurrency(20000)}</p>
          </ControllerField>
          <ControllerField
            control={control}
            name="dental"
            component={Checkbox}
            componentProps={{
              isCheckbox: true,
              rootClassName: "ui-checkbox",
            }}
          >
            <p>Dental examination and treatment/year (+{parseCurrency(75)})</p>
            <p>Insurance amount: {parseCurrency(15000)}</p>
          </ControllerField>
        </Card>
      ),
    },
  ];
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StepProcess steps={steps} isValid={isValid} />
    </form>
  );
};

export default PolicyForm;
