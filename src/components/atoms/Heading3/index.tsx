import React, { ComponentPropsWithoutRef, FC } from "react";

export type Heading3Props = Pick<ComponentPropsWithoutRef<"h3">, "children">;

const Heading3: FC<Heading3Props> = ({ children }) => <h3>{children}</h3>;

export default Heading3;
