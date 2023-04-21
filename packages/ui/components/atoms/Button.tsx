import { PropsWithChildren } from "react";

function Button({ children }: PropsWithChildren) {
  return <button>{children}</button>;
}

export default Button;
