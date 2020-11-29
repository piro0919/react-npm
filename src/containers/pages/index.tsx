import CardList, { CardListProps } from "components/organisms/CardList";
import Layout from "components/templates/Layout";
import usePackages from "hooks/usePackages";
import React, { FC, lazy, Suspense, useMemo } from "react";
import { pascalCase } from "pascal-case";
import { ToastContainer, toast } from "react-toastify";
import {
  NodePackageManagerConsumer,
  NodePackageManagerValue,
} from "contexts/NodePackageManagerContext";

const Pages: FC<Pick<NodePackageManagerValue, "nodePackageManager">> = ({
  nodePackageManager,
}) => {
  const packages = usePackages();
  const items = useMemo<CardListProps["items"]>(
    () =>
      packages.map(({ name, version }) => {
        const componentName = pascalCase(name);
        const LazyComponent = lazy(
          () => import(`components/packages/${componentName}`)
        );
        const installCommand =
          nodePackageManager === "npm"
            ? `npm install --save ${name}`
            : `yarn add ${name}`;
        const handleCopy = () =>
          toast.success(`Copy "${installCommand}"`, { containerId: "pages" });

        return {
          handleCopy,
          installCommand,
          name,
          version,
          demo: (
            <Suspense fallback={null} key={name}>
              <LazyComponent />
            </Suspense>
          ),
          key: name,
        };
      }),
    [nodePackageManager, packages]
  );

  return (
    <Layout>
      <CardList items={items} />
      <ToastContainer
        containerId="pages"
        enableMultiContainer={true}
        position="bottom-right"
      />
    </Layout>
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <NodePackageManagerConsumer>
    {({ nodePackageManager }) => (
      <Pages nodePackageManager={nodePackageManager} />
    )}
  </NodePackageManagerConsumer>
);
