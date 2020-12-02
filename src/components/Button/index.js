import classNames from "classnames";

const Button = ({
  primary,
  inverse,
  secondary,
  block,
  as = "button",
  children,
  tertiary,
  ...props
}) => {
  let Component = as;

  return (
    <Component
      className={classNames("button", {
        button_primary: primary,
        button_secondary: secondary,
        button_inverse: inverse,
        button_block: block,
        button_tertiary: tertiary
      })}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
