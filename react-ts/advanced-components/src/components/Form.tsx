import { type FC, type ComponentPropsWithoutRef } from "react";

type FormProps = ComponentPropsWithoutRef<"form">;

const Form: FC<FormProps> = (props) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
  };

  return (
    <form onSubmit={handleSubmit} {...props}>
      {props.children}
    </form>
  );
};

export default Form;
