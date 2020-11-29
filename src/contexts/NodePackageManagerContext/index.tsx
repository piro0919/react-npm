import React, { FC, createContext, useState, useCallback } from "react";

type NodePackageManager = "npm" | "yarn";

type ToggleNodePackageManager = () => void;

export type NodePackageManagerValue = {
  nodePackageManager: NodePackageManager;
  toggleNodePackageManager: ToggleNodePackageManager;
};

const { Consumer, Provider } = createContext<NodePackageManagerValue>({
  nodePackageManager: "npm",
  toggleNodePackageManager: () => {},
});

export const NodePackageManagerConsumer = Consumer;

export const NodePackageManagerProvider: FC = ({ children }) => {
  const [
    nodePackageManager,
    setNodePackageManager,
  ] = useState<NodePackageManager>("npm");
  const toggleNodePackageManager = useCallback<ToggleNodePackageManager>(() => {
    setNodePackageManager((prevNodePackageManager) =>
      prevNodePackageManager === "npm" ? "yarn" : "npm"
    );
  }, []);

  return (
    <Provider value={{ nodePackageManager, toggleNodePackageManager }}>
      {children}
    </Provider>
  );
};
