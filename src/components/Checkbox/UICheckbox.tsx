import { Checkbox } from "antd";

interface UICheckboxProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  checked?: boolean;
}

const UICheckbox = ({ children, className, ...rest }: UICheckboxProps) => {
  return (
    <div className={className}>
      <Checkbox rootClassName="ui-checkbox" {...rest}>
        {children}
      </Checkbox>
    </div>
  );
};

export default UICheckbox;
