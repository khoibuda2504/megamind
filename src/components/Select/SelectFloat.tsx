import { Select } from "antd";
interface Option {
  value: string | number; 
  label: string; 
  [key: string]: any; 
}
interface SelectFloatProps {
  width?: string;
  textFloat?: string;
  options: Option[];
};
const SelectFloat = ({
  width = "100%",
  textFloat = "Select",
  options
}: SelectFloatProps) => (
  <div className="relative">
    <label className="label-float">{textFloat}</label>
    <Select
      style={{ width }}
      options={options}
    />
  </div>
);

export default SelectFloat;
