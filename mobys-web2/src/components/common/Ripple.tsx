import { createRipples } from "react-ripples";

class RippleProps {
  children?: JSX.Element | JSX.Element[];
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const ReactRipple = createRipples({});

const Ripple = (props: RippleProps) => {
  if (!props.disabled)
    return (
      <ReactRipple
        {...props}
        onClick={() => setTimeout(() => props.onClick && props.onClick(), 80)}
        className={"cursor-pointer w-full h-full p-0 m-0 " + props.className}
      />
    );
  else
    return (
      <div className={"cursor-default w-full h-full p-0 m-0 " + props.className}>
        {props.children}
      </div>
    );
};
export default Ripple;
