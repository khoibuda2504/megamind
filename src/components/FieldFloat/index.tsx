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
      <label className="absolute top-[-7px] left-[7px] z-10 text-[11px] px-[6px] text-gray-400 bg-white">{textFloat}</label>
      {children}
    </div>
  );
};

export default FieldFloat;
