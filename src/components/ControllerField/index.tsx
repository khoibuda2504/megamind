import React from "react";
import { Control, useController } from "react-hook-form";
import FieldFloat from "../FieldFloat";

interface ControllerProps {
  control: Control<any, any>;
  name: string;
  label?: string;
  rules?: any;
  component: React.ComponentType<any>;
  componentProps?: { [key: string]: any };
  children?: React.ReactNode;
}

const ControllerField: React.FC<ControllerProps> = ({
  control,
  name,
  label,
  rules,
  component: Component,
  componentProps = {},
  children
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name,
    rules,
  });

  return (
    <FieldFloat textFloat={label ?? ''}>
      <Component {...field} {...componentProps} status={error ? "error" : ""}>
        {children}
      </Component>
    </FieldFloat>
  );
};

export default ControllerField;