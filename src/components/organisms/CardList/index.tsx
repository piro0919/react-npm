import Card, { CardProps } from "components/molecules/Card";
import React, { ComponentPropsWithoutRef, FC, useMemo } from "react";
import styles from "./style.module.scss";

type Item = Pick<
  CardProps,
  "handleCopy" | "name" | "typesVersion" | "version"
> &
  Pick<ComponentPropsWithoutRef<"li">, "key">;

export type CardListProps = {
  items: Item[];
};

const CardList: FC<CardListProps> = ({ items }) => {
  const children = useMemo<ComponentPropsWithoutRef<"ul">["children"]>(
    () =>
      items.map(({ handleCopy, key, name, typesVersion, version }) => (
        <li key={key}>
          <Card
            handleCopy={handleCopy}
            name={name}
            typesVersion={typesVersion}
            version={version}
          />
        </li>
      )),
    [items]
  );

  return <ul className={styles.list}>{children}</ul>;
};

export default CardList;
