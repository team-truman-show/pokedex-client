// MODULE
import {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
} from "react";

const defaultValue = {};
const ViewportContext = createContext(defaultValue);

const Viewport = {
  PHONE: "PHONE",
  PHABLET: "PHABLET",
  TABLET: "TABLET",
  DESKTOP: "DESKTOP",
  WIDE: "WIDE",
};

const getDeviceConfig = (width) => {
  if (width < 400) {
    return Viewport.PHONE;
  } else if (width < 768) {
    return Viewport.PHABLET;
  } else if (width < 1024) {
    return Viewport.TABLET;
  } else if (width < 1536) {
    return Viewport.DESKTOP;
  } else {
    return Viewport.WIDE;
  }
};

const ViewportProvider = ({ children, reqViewport }) => {
  const initialViewport = reqViewport || Viewport.WIDE;
  const [viewport, setViewport] = useState(initialViewport);

  const setCurrentViewport = useCallback(
    (currentViewport) => {
      if (viewport !== currentViewport) {
        setViewport(currentViewport);
      }
    },
    [viewport]
  );

  useEffect(() => {
    const initialViewportCS = getDeviceConfig(window.innerWidth);
    setCurrentViewport(initialViewportCS);

    const calcInnerWidth = () => {
      const newViewport = getDeviceConfig(window.innerWidth);
      setCurrentViewport(newViewport);
    };

    window.addEventListener("resize", calcInnerWidth);

    return () => {
      window.removeEventListener("resize", calcInnerWidth);
    };
  }, [setCurrentViewport]);

  return (
    <ViewportContext.Provider value={viewport}>
      {children}
    </ViewportContext.Provider>
  );
};

function useViewport() {
  const context = useContext(ViewportContext);
  if (context === defaultValue) {
    throw new Error("useViewport is not used within a ViewportProvider");
  }
  return context;
}

const MockedViewportProvider = ({ children, viewport = Viewport.DESKTOP }) => {
  return (
    <ViewportContext.Provider value={viewport}>
      {children}
    </ViewportContext.Provider>
  );
};

export { MockedViewportProvider, useViewport, ViewportProvider, Viewport };
