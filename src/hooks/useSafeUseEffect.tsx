import { useEffect, useRef } from "react";

const useSafeUseEffect = (callback: () => any, deps: any[]) => {
  const isExecuted = useRef<boolean | (() => void)>();
  useEffect(() => {
    if (!isExecuted.current) {
      isExecuted.current = callback();
    }
    return () => {
      if (typeof isExecuted.current === "function") {
        isExecuted.current();
      }
      isExecuted.current = false;
    };
  }, deps);
};

export default useSafeUseEffect;
