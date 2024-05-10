import React from "react";

const FieldFloat = ({
  textFloat,
  children,
}: {
  textFloat: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="relative">
      <label className="label-float">{textFloat}</label>
      {children}
    </div>
  );
};

export default FieldFloat;
