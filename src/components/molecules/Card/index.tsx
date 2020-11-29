import Heading2, { Heading2Props } from "components/atoms/Heading2";
import Heading3 from "components/atoms/Heading3";
import React, { ComponentPropsWithoutRef, FC, useMemo } from "react";
import styles from "./style.module.scss";
import { FaRegCopy, FaGithub, FaNpm } from "react-icons/fa";
import { pascalCase } from "pascal-case";
import CopyToClipboard from "react-copy-to-clipboard";
import { NodePackageManagerConsumer } from "contexts/NodePackageManagerContext";

export type CardProps = {
  demo: ComponentPropsWithoutRef<"div">["children"];
  handleCopy: CopyToClipboard.Props["onCopy"];
  name: Heading2Props["children"] & Parameters<typeof pascalCase>[0];
  version: ComponentPropsWithoutRef<"div">["children"];
};

const Card: FC<
  CardProps & {
    nodePackageManager: "npm" | "yarn";
  }
> = ({ demo, handleCopy, name, nodePackageManager, version }) => {
  const install = useMemo<
    ComponentPropsWithoutRef<"div">["children"] & CopyToClipboard.Props["text"]
  >(
    () =>
      nodePackageManager === "npm"
        ? `npm install --save ${name}`
        : `yarn add ${name}`,
    [name, nodePackageManager]
  );

  return (
    <div className={styles.wrapper}>
      <header className={styles.headerWrapper}>
        <Heading2>{name}</Heading2>
        <a
          href={`https://www.npmjs.com/package/${name}`}
          rel="noreferrer"
          target="_blank"
        >
          <FaNpm className={styles.npmIcon} />
        </a>
      </header>
      <div className={styles.contentWrapper}>
        <article>
          <div className={styles.headingWrapper}>
            <Heading3>Version</Heading3>
          </div>
          <div className={styles.articleContentWrapper}>{version}</div>
        </article>
        <article>
          <div className={styles.headingWrapper}>
            <Heading3>Install</Heading3>
            <CopyToClipboard onCopy={handleCopy} text={install}>
              <button>
                <FaRegCopy className={styles.copyIcon} />
              </button>
            </CopyToClipboard>
          </div>
          <div className={styles.articleContentWrapper}>{install}</div>
        </article>
        <article>
          <div className={styles.headingWrapper}>
            <Heading3>Demo</Heading3>
            <a
              href={`https://github.com/piro0919/react-npm/blob/master/src/components/packages/${pascalCase(
                name
              )}/index.tsx`}
              rel="noreferrer"
              target="_blank"
            >
              <FaGithub className={styles.githubIcon} />
            </a>
          </div>
          <div className={styles.articleContentWrapper}>{demo}</div>
        </article>
      </div>
    </div>
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ demo, handleCopy, name, version }: CardProps) => (
  <NodePackageManagerConsumer>
    {({ nodePackageManager }) => (
      <Card
        demo={demo}
        handleCopy={handleCopy}
        name={name}
        nodePackageManager={nodePackageManager}
        version={version}
      />
    )}
  </NodePackageManagerConsumer>
);
