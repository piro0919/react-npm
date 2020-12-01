import CardList, { CardListProps } from "components/organisms/CardList";
import Layout from "components/templates/Layout";
import usePackages from "hooks/usePackages";
import React, { FC, useCallback, useMemo } from "react";
import { ToastContainer, toast } from "react-toastify";

const Pages: FC = () => {
  const packages = usePackages();
  const handleCopy = useCallback<
    NonNullable<CardListProps["items"][0]["handleCopy"]>
  >(() => toast.success("Copied to clipboard!", { containerId: "pages" }), []);
  const items = useMemo<CardListProps["items"]>(
    () =>
      packages.map(({ name, typesVersion, version }) => ({
        handleCopy,
        name,
        typesVersion,
        version,
        key: name,
      })),
    [handleCopy, packages]
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
