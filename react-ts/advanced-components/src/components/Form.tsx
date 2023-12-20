import {
  type FC,
  type ComponentPropsWithoutRef,
  forwardRef,
  useImperativeHandle,
} from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};

export type FormHandleType = {
  clear: () => void;
};

// const Form: FC<FormProps> = ({ onSave, children, ...otherProps }) => {
const Form = forwardRef<FormHandleType, FormProps>(
  ({ onSave, children, ...otherProps }, ref) => {
    const form = useRef<HTMLFormElement>(null);

    useImperativeHandle(ref, () => {
      return {
        clear() {
          console.log("CLEARING");
          form.current?.reset();
        },
      };
    });

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);
      const data = Object.fromEntries(formData);

      onSave(data);
    };

    return (
      <form onSubmit={handleSubmit} {...otherProps} ref={form}>
        {children}
      </form>
    );
  }
);

export default Form;
