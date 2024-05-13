import React from "react";
import { Control, useController } from "react-hook-form";
import FieldFloat from "../FieldFloat";
import dayjs from "dayjs";
import { FieldType } from "@/utilities/constants";

interface IControllerProps {
  control: Control<any, any>;
  name: string;
  label?: string;
  rules?: { [key: string]: any };
  component: React.ComponentType<any>;
  componentProps?: { [key: string]: any };
  children?: React.ReactNode;
  fieldType?: FieldType;
}

const ControllerField: React.FC<IControllerProps> = ({
  control,
  name,
  label,
  rules,
  component: Component,
  componentProps = {},
  children,
  fieldType,
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name,
    rules,
  });
  const finalField = {
    ...field,
    ...(fieldType === FieldType.DATE
      ? { value: field.value ? dayjs(field.value) : null }
      : {}),
    ...(fieldType === FieldType.CHECKBOX ? { checked: field.value } : {}),
  };
  return (
    <FieldFloat textFloat={label ?? ""}>
      <Component
        {...finalField}
        {...componentProps}
        status={error ? "error" : ""}
      >
        {children}
      </Component>
    </FieldFloat>
  );
};

export default ControllerField;
