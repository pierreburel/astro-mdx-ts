import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  title?: string;
  variant?: "a" | "b";
}>;

export default function ReactComponent({ children, title, variant = 'a' }: Props) {
  return (
    <div data-variant={variant}>
      {title && <h2>{title}</h2>}

      {children}
    </div>
  );
}
