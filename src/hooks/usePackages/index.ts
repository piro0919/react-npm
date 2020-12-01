import { useMemo } from "react";
import packageJson from "./jsons/package.json";

type Package = {
  name: string;
  typesVersion: string;
  version: string;
};

export type Packages = Package[];

const usePackages = (): Packages => {
  const ignorePackages = useMemo(
    () => [
      "concurrently",
      "gh-pages",
      "node-sass",
      "npm-run-all",
      "pascal-case",
      "react",
      "react-copy-to-clipboard",
      "react-dom",
      "react-router-dom",
      "react-scripts",
      "react-snap",
      "react-switch",
      "read-package-json",
      "ress",
      "sass-mq",
      "typescript",
      "use-persisted-state",
      "web-vitals",
    ],
    []
  );
  const packages = useMemo(() => {
    const { dependencies } = packageJson;

    return Object.entries(dependencies)
      .filter(([name]) => name.indexOf("@") === -1)
      .filter(([name]) => !ignorePackages.includes(name))
      .map(([name, version]) => ({
        name,
        version,
        typesVersion:
          `@types/${name}` in dependencies
            ? // @ts-ignore
              dependencies[`@types/${name}`]
            : "",
      }));
  }, [ignorePackages]);

  return packages;
};

export default usePackages;
