import { useMemo } from "react";
import packageJson from "./jsons/package.json";

const usePackages = () => {
  const ignorePackages = useMemo(
    () => [
      "camelcase",
      "concurrently",
      "gh-pages",
      "node-sass",
      "react",
      "react-copy-to-clipboard",
      "react-dom",
      "react-icons",
      "react-router-dom",
      "react-scripts",
      "react-switch",
      "read-package-json",
      "ress",
      "sass-mq",
      "typescript",
      "web-vitals",
    ],
    []
  );
  const packages = useMemo(() => {
    const { dependencies } = packageJson;

    return Object.entries(dependencies)
      .filter(([name]) => name.indexOf("@") === -1)
      .filter(([name]) => !ignorePackages.includes(name))
      .map(([name, version]) => ({ name, version }));
  }, [ignorePackages]);

  return packages;
};

export default usePackages;
