import classNames from "classnames";

const Icon = ({ name, className, ...props }) => {
  return (
    <svg
      className={classNames(
        "icon",
        {
          [`icon-${name}`]: name
        },
        className
      )}
      {...props}
    >
      <use xlinkHref={`/icons/SVG/symbol-defs.svg#icon-${name}`} />
    </svg>
  );
};

export default Icon;
