import classNames from "classnames";

export const Section = ({ as = "section", className, ...props }) => {
  const Component = as;
  return <Component className={classNames("section", className)} {...props} />;
};

export const SectionTitle = ({ as = "div", ...props }) => {
  const Component = as;
  return <Component className="section__title" {...props} />;
};

export const SectionHeader = ({ as = "header", ...props }) => {
  const Component = as;
  return <Component className="section__header" {...props} />;
};

export const SectionBody = (props) => {
  return <div className="section__body" {...props} />;
};
