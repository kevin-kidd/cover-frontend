import { RefObject, useEffect } from "react"

export const useOnClickOutside = (ref: RefObject<HTMLDivElement>, handler) => {
    useEffect(
      () => {
        const listener = (event) => {
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
          handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        };
      },
      [ref, handler]
    );
};

export const round = (value, precision) => {
    let multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
};

export const trueBalance = (balance: number, decimals: number) => {
    return Math.round((balance / (10 * 10**(decimals - 1)) + Number.EPSILON) * 100) / 100;
};