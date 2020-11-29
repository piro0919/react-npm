import { useEffect, useState } from "react";

export type WindowSize = {
  windowHeight: number;
  windowWidth: number;
};

const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    windowHeight: window.innerHeight,
    windowWidth: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
