import { Button, Steps } from "antd";
import React, { useMemo, useState } from "react";

interface IStepProcessProps {
  steps: Record<string, string | React.ReactNode>[];
  isValid?: boolean | ((current: number) => boolean);
  isOnNext?: (current: number) => void;
  isPreSubmit?: boolean;
  isDone?: boolean;
  isEdit?: boolean;
}
const StepProcess = (props: IStepProcessProps) => {
  const {
    steps,
    isValid = true,
    isPreSubmit = false,
    isOnNext,
    isDone = false,
    isEdit = false,
  } = props;
  const [current, setCurrent] = useState(0);
  const items = useMemo(() => {
    return steps.map((item) => ({ key: item.title, title: item.title }));
  }, [steps.length]);
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const isDisabledButton = !(typeof isValid === "function"
    ? isValid(current)
    : isValid);
  return (
    <>
      <Steps current={current} items={items} className="mb-4" />
      <div key={current}>{steps[current].content}</div>
      <div className="flex justify-end mt-4">
        {current > 0 && (
          <Button className="mx-2" onClick={() => prev()}>
            Back
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button
            disabled={isDisabledButton}
            type="primary"
            onClick={() => {
              isOnNext && isOnNext(current);
              next();
            }}
          >
            Next
          </Button>
        )}
        {!isDone && !isPreSubmit && current === steps.length - 1 && (
          <Button disabled={isDisabledButton} type="primary" htmlType="submit">
            {isEdit ? "Update" : "Save"}
          </Button>
        )}
        {isDone && current === steps.length - 1 && (
          <Button onClick={() => setCurrent(0)}>Return</Button>
        )}
      </div>
    </>
  );
};

export default React.memo(StepProcess);
