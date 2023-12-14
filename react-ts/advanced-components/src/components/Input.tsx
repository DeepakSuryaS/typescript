import { type ComponentPropsWithoutRef, type FC, forwardRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

// const Input: FC<InputProps> = ({ label, id, ...props }) => {
//   return (
//     <p>
//       <label htmlFor={id}>{label}</label>
//       <input id={id} {...props} />
//     </p>
//   );
// };

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, ...props }, ref) => {
    return (
      <p>
        <label htmlFor={id}>{label}</label>
        <input id={id} {...props} ref={ref} />
      </p>
    );
  }
);

export default Input;
