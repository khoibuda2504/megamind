import { Button, Steps } from "antd";
import React, { useMemo, useState } from "react";

interface StepProcessProps {
  steps: Record<string, string | React.ReactNode>[];
}

const StepProcess = ({ steps }: StepProcessProps) => {
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
  return (
    <>
      <Steps current={current} items={items} className="mb-4" />
      <div>{steps[current].content}</div>
      <div className="flex justify-end mt-4">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" htmlType="submit">
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
