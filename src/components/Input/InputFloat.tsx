import { Input } from "antd";
type InputFloatProps = {
  width?: string;
  textFloat?: string;
};

const InputFloat = ({
  width = "100%",
  textFloat = "Search",
}: InputFloatProps) => {
  return (
    <div className="relative">
      <label className="label-float">{textFloat}</label>
      <Input style={{ width }} allowClear size="middle" />
    </div>
  );
};

export default InputFloat;
