import { Button, Steps } from "antd";
import React, { useMemo, useState } from "react";

interface StepProcessProps {
  steps: Record<string, string | React.ReactNode>[];
  isValid?: boolean;
  callBackIsValid?: (current: number) => boolean;
}

const StepProcess = ({ steps, isValid, callBackIsValid }: StepProcessProps) => {
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
  const isDisabledButton = !(callBackIsValid
    ? callBackIsValid(current)
    : isValid);
  return (
    <>
      <Steps current={current} items={items} className="mb-4" />
      <div key={current}>{steps[current].content}</div>
      <div className="flex justify-end mt-4">
        {current < steps.length - 1 && (
          <Button
            disabled={isDisabledButton}
            type="primary"
            onClick={() => next()}
          >
            Next
          </Button>
        )}
        {/* logic sẽ truyền isSubmitSoon vào để check: 
            - ko còn nút done cuối cùng
            - nút kế cuối sẽ đóng vai trò submit
            handle isValid vừa nhận value vừa nhận function
        */}
        {current === steps.length - 1 && (
          <Button disabled={isDisabledButton} type="primary" htmlType="submit">
            Done
          </Button>
        )}
        {current > 0 && (
          <Button className="mx-2" onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export default React.memo(StepProcess);
