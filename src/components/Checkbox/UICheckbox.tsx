import { Checkbox } from "antd";

interface UICheckboxProps {
  children: React.ReactNode;
  className?: string;
}

const UICheckbox = ({ children, className }: UICheckboxProps) => {
  return (
    <div className={className}>
      <Checkbox rootClassName="ui-checkbox" disabled checked>
        {children}
      </Checkbox>
    </div>
  );
};

export default UICheckbox;
