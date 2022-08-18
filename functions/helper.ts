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

export const truncateAddress = (address: string) => {
  return address.replace(address.substring(11,address.length - 8), ".....")
};
