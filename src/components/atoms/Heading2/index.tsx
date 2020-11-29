import React, { ComponentPropsWithoutRef, FC } from "react";

export type Heading2Props = Pick<ComponentPropsWithoutRef<"h2">, "children">;

const Heading2: FC<Heading2Props> = ({ children }) => <h2>{children}</h2>;

export default Heading2;
