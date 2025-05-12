import { twMerge } from "tailwind-merge";

export const Container = ({ children, className }) => {
  return <div className={twMerge("container ", className)}>{children}</div>;
};

export default Container;
