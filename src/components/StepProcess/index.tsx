import { Button, Steps } from "antd";
import React, { useImperativeHandle, useMemo, useState } from "react";

interface StepProcessProps {
  steps: Record<string, string | React.ReactNode>[];
  isValid?: boolean | ((current: number) => boolean);
  isPreSubmit?: boolean;
}
const StepProcess = React.forwardRef<any, StepProcessProps>(
  ({ steps, isValid = true, isPreSubmit = false }, ref) => {
    const [current, setCurrent] = useState(0);
    const items = useMemo(() => {
      return steps.map((item) => ({ key: item.title, title: item.title }));
    }, [steps.length]);
    useImperativeHandle(ref, () => ({
      next,
    }));
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
          {current < steps.length - 1 && (
            <Button
              disabled={isDisabledButton}
              type="primary"
              {...(isPreSubmit && current === steps.length - 2
                ? { htmlType: "submit" }
                : { onClick: next })}
            >
              Next
            </Button>
          )}
          {!isPreSubmit && current === steps.length - 1 && (
            <Button
              disabled={isDisabledButton}
              type="primary"
              htmlType="submit"
            >
              Done
            </Button>
          )}
          {isPreSubmit && current !== steps.length - 1 && current > 0 && (
            <Button className="mx-2" onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </>
    );
  }
);

// const StepProcess = ({
//   steps,
//   isValid = true,
//   isPreSubmit = false,
// }: StepProcessProps) => {
//   const [current, setCurrent] = useState(0);
//   const items = useMemo(() => {
//     return steps.map((item) => ({ key: item.title, title: item.title }));
//   }, [steps.length]);

//   const next = () => {
//     setCurrent(current + 1);
//   };

//   const prev = () => {
//     setCurrent(current - 1);
//   };
//   const isDisabledButton = !(typeof isValid === "function"
//     ? isValid(current)
//     : isValid);
//   return (
//     <>
//       <Steps current={current} items={items} className="mb-4" />
//       <div key={current}>{steps[current].content}</div>
//       <div className="flex justify-end mt-4">
//         {current < steps.length - 1 && (
//           <Button
//             disabled={isDisabledButton}
//             type="primary"
//             {...(isPreSubmit && current === steps.length - 2
//               ? { htmlType: "submit" }
//               : { onClick: next })}
//           >
//             Next
//           </Button>
//         )}
//         {!isPreSubmit && current === steps.length - 1 && (
//           <Button disabled={isDisabledButton} type="primary" htmlType="submit">
//             Done
//           </Button>
//         )}
//         {current > 0 && (
//           <Button className="mx-2" onClick={() => prev()}>
//             Previous
//           </Button>
//         )}
//       </div>
//     </>
//   );
// };

export default React.memo(StepProcess);
