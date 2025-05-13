import { twMerge } from "tailwind-merge";

export const Title = ({ children, className }) => {
  return (
    <h3 className={twMerge("text-[96px] text-safron font-bold uppercase leading-[100px]", className)}>{children}</h3>
  );
};

export default Title;
