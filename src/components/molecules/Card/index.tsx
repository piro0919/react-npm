import Heading2, { Heading2Props } from "components/atoms/Heading2";
import Heading3 from "components/atoms/Heading3";
import React, { ComponentPropsWithoutRef, FC } from "react";
import styles from "./style.module.scss";
import { FaRegCopy, FaGithub, FaNpm } from "react-icons/fa";
import { pascalCase } from "pascal-case";
import CopyToClipboard from "react-copy-to-clipboard";

export type CardProps = {
  demo: ComponentPropsWithoutRef<"div">["children"];
  handleCopy: CopyToClipboard.Props["onCopy"];
  installCommand: ComponentPropsWithoutRef<"div">["children"] &
    CopyToClipboard.Props["text"];
  name: Heading2Props["children"] & Parameters<typeof pascalCase>[0];
  version: ComponentPropsWithoutRef<"div">["children"];
};

const Card: FC<CardProps> = ({
  demo,
  handleCopy,
  installCommand,
  name,
  version,
}) => (
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
          <CopyToClipboard onCopy={handleCopy} text={installCommand}>
            <button>
              <FaRegCopy className={styles.copyIcon} />
            </button>
          </CopyToClipboard>
        </div>
        <div className={styles.articleContentWrapper}>{installCommand}</div>
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

export default Card;
