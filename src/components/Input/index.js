import { forwardRef } from "react";
import classNames from "classnames";

const Input = forwardRef(({ className, error, ...props }, ref) => {
  return (
    <input
      ref={ref}
      type="text"
      className={classNames("input", className, { error })}
      {...props}
    />
  );
});

export function InputGroup({ className, ...props }) {
  return <div className={classNames("input-group", className)} {...props} />;
}
export function InputText({ className, error, ...props }) {
  return (
    <div
      className={classNames("input-text", className, {
        error
      })}
      {...props}
    />
  );
}

export default Input;
