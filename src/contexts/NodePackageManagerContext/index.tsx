import React, { FC, createContext, useCallback } from "react";
import createPersistedState from "use-persisted-state";

type NodePackageManager = "npm" | "yarn";

type ToggleNodePackageManager = () => void;

export type NodePackageManagerValue = {
  nodePackageManager: NodePackageManager;
  toggleNodePackageManager: ToggleNodePackageManager;
};

const useNodePackageManagerState = createPersistedState("nodePackageManager");
const { Consumer, Provider } = createContext<NodePackageManagerValue>({
  nodePackageManager: "npm",
  toggleNodePackageManager: () => {},
});

export const NodePackageManagerConsumer = Consumer;

export const NodePackageManagerProvider: FC = ({ children }) => {
  const [
    nodePackageManager,
    setNodePackageManager,
  ] = useNodePackageManagerState<NodePackageManager>("npm");
  const toggleNodePackageManager = useCallback<ToggleNodePackageManager>(() => {
    setNodePackageManager((prevNodePackageManager) =>
      prevNodePackageManager === "npm" ? "yarn" : "npm"
    );
  }, [setNodePackageManager]);

  return (
    <Provider value={{ nodePackageManager, toggleNodePackageManager }}>
      {children}
    </Provider>
  );
};
