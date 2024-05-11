import { UICheckbox } from "@/components/Checkbox";
import StepProcess from "@/components/StepProcess";
import { parseCurrency } from "@/utilities/helpers";
import { Card, Col, DatePicker, Row, Select } from "antd";
import { relationshipList, insurancePackageList } from "@/constants";
import { SubmitHandler, useForm } from "react-hook-form";
import { ControllerField } from "@/components";
import { renderGeneralInfo } from "../components";
import { PolicyType, ProductType } from "@/types/policy";
import { handleCreatePolicy } from "../services/Policy";
import { useModalStore } from "@/store";

interface IPolicyForm {
  setProduct: React.Dispatch<React.SetStateAction<ProductType>>;
}

const PolicyForm = ({ setProduct }: IPolicyForm) => {
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<PolicyType>({
    mode: "onBlur",
  });
  const { closeModal } = useModalStore();
  const onSubmit: SubmitHandler<PolicyType> = (data) => {
    const res = handleCreatePolicy(data);
    setProduct((prev) => ({
      ...prev,
      policies: [...(prev.policies ?? []), res],
    }));
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
          <h4 className="font-bold">General Information</h4>
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
                componentProps={{
                  className: "w-full",
                }}
              />
            </Col>
            <Col xs={24} md={8}>
              <ControllerField
                control={control}
                name="endDate"
                label="End Date"
                rules={{ required: true }}
                component={DatePicker}
                componentProps={{
                  className: "w-full",
                }}
              />
            </Col>
          </Row>
          <h4>Mandatory Insurance Benefits</h4>
          <UICheckbox className="mb-3" disabled checked>
            <p>Death and permanent total disability due to accident/year.</p>
            <p>Insurance amount: {parseCurrency(50000)}</p>
          </UICheckbox>
          <UICheckbox className="mb-3" disabled checked>
            <p>Death and permanent total disability due to disease/year.</p>
            <p>Insurance amount: {parseCurrency(50000)}</p>
          </UICheckbox>
          <UICheckbox className="mb-3" disabled checked>
            <p>Medical expenses due to accidents/year</p>
            <p>Insurance amount: {parseCurrency(10000)}</p>
          </UICheckbox>
          <UICheckbox disabled checked>
            <p>Medical expenses due to accidents/year</p>
            <p>Insurance amount: {parseCurrency(10000)}</p>
          </UICheckbox>
          <h4 className="mt-4">Additional Insurance Benefits</h4>
          <ControllerField
            control={control}
            name="outPatient"
            component={UICheckbox}
          >
            <p>Outpatient treatment/year (+{parseCurrency(100)})</p>
            <p>Insurance amount: {parseCurrency(20000)}</p>
          </ControllerField>
          <ControllerField
            control={control}
            name="dental"
            component={UICheckbox}
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
