import { UICheckbox } from "@/components/Checkbox";
import StepProcess from "@/components/StepProcess";
import { parseCurrency } from "@/utilities/helpers";
import { Card } from "antd";

const PolicyForm = () => {
  const steps = [
    {
      title: "Insured Object Information",
      content: <Card>hihih</Card>,
    },
    {
      title: "Insurance Package",
      content: (
        <Card>
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
          <UICheckbox>
            <p>Outpatient treatment/year (+{parseCurrency(100)})</p>
            <p>Insurance amount: {parseCurrency(20000)}</p>
          </UICheckbox>
          <UICheckbox>
            <p>Dental examination and treatment/year (+{parseCurrency(75)})</p>
            <p>Insurance amount: {parseCurrency(15000)}</p>
          </UICheckbox>
        </Card>
      ),
    },
  ];
  return <StepProcess steps={steps} />;
};

export default PolicyForm;
