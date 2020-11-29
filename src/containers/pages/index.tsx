import CardList, { CardListProps } from "components/organisms/CardList";
import Layout from "components/templates/Layout";
import usePackages from "hooks/usePackages";
import React, { FC, lazy, Suspense, useMemo } from "react";
import camelCase from "camelcase";

const Pages: FC = () => {
  const packages = usePackages();
  const items = useMemo<CardListProps["items"]>(
    () =>
      packages.map(({ name, version }) => {
        const LazyComponent = lazy(
          () =>
            import(
              `components//packages/${camelCase(name, {
                pascalCase: true,
              })}`
            )
        );

        return {
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
    </Layout>
  );
};

export default Pages;
