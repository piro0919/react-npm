import React, { ComponentPropsWithoutRef, FC, useCallback } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReactToastify: FC = () => {
  const handleClick = useCallback<
    NonNullable<ComponentPropsWithoutRef<"button">["onClick"]>
  >(() => {
    toast("Hello World!", { containerId: "reactToastify" });
  }, []);

  return (
    <div>
      <button onClick={handleClick}>Click!</button>
      <ToastContainer enableMultiContainer={true} containerId="reactToastify" />
    </div>
  );
};

export default ReactToastify;
