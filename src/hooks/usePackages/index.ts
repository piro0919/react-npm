import { useMemo } from "react";
import packageJson from "./jsons/package.json";

const usePackages = () => {
  const ignorePackages = useMemo(
    () => [
      "@testing-library/jest-dom",
      "@testing-library/react",
      "@testing-library/user-event",
      "@types/jest",
      "@types/node",
      "@types/react",
      "@types/react-dom",
      "camelcase",
      "concurrently",
      "gh-pages",
      "node-sass",
      "react",
      "react-dom",
      "react-icons",
      "react-router-dom",
      "react-scripts",
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
      .filter(([name]) => !ignorePackages.includes(name))
      .map(([name, version]) => ({ name, version }));
  }, [ignorePackages]);

  console.log(packages);

  return packages;
};

export default usePackages;
