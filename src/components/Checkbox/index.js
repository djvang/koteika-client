import { forwardRef } from "react";

const Checkbox = forwardRef(({ children, ...props }, ref) => {
  return (
    <label>
      <input ref={ref} className="checkbox" type="checkbox" {...props} />
      {children}
    </label>
  );
});

export default Checkbox;
