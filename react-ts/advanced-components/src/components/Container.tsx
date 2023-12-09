import { type ElementType, type ComponentPropsWithoutRef } from "react";

type ContainerProps<T extends ElementType> = {
  as?: T;
} & ComponentPropsWithoutRef<T>; //children prop is covered in this ComponentPropsWithoutRef

const Container = <C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) => {
  const Component = as || "div";

  return <Component {...props}>{children}</Component>;
};

// function Container<C extends ElementType>({
//   as,
//   children,
//   ...props
// }: ComponentProps<C>) {
//   const Component = as || "div";

//   return <Component {...props}>{children}</Component>;
// }

export default Container;
