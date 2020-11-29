import CardList, { CardListProps } from "components/organisms/CardList";
import Layout from "components/templates/Layout";
import usePackages from "hooks/usePackages";
import React, { FC, lazy, Suspense, useMemo } from "react";
import { pascalCase } from "pascal-case";
import { ToastContainer, toast } from "react-toastify";

const Pages: FC = () => {
  const packages = usePackages();
  const items = useMemo<CardListProps["items"]>(
    () =>
      packages.map(({ name, version }) => {
        const componentName = pascalCase(name);
        const LazyComponent = lazy(
          () => import(`components/packages/${componentName}`)
        );
        const handleCopy = () =>
          toast.success(`${name} copied.`, { containerId: "pages" });

        return {
          handleCopy,
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
    [packages]
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

export default Pages;
