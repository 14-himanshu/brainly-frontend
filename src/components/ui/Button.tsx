export interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: any;
  endIcon?: any;
  onClick: () => void;
}

const variantStyles = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-300 text-purple-600",
};

const defaultStyles = "rounded-md flex";

const sizeStyles = {
  sm: "py-1 px-2 roundex-sm", 
  md: "py-2 px-4 roundex-md",
  lg: "py-4 px-8 roundex-xl",
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${variantStyles[props.variant]} ${defaultStyles} ${
        sizeStyles[props.size]
      }`}
    >
      <div className="flex items-center justify-center">
        {props.startIcon ? <div>{props.startIcon}</div> : null}{" "}
        <div className="pl-2 pr-2">{props.text}</div>
        {props.endIcon}
      </div>
    </button>
  );
};

{/* <Button variant="primary" size="md" onClick={() => {}} text={"asd"} />; */}
