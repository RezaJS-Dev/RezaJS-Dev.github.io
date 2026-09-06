import { useEffect } from "react";

export default function useClickOutside(refs, isOpen, onClose) {
  useEffect(() => {
    if (!isOpen) return;
    const listener = (event) => {
      const clickedInside = refs.some((ref) =>
        ref.current?.contains(event.target),
      );
      if (!clickedInside) onClose();
    };
    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, [refs, isOpen, onClose]);
}
