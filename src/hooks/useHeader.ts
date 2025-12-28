import { navLinks } from "@/utils/links";
import React, { useEffect, useRef, useState, useCallback } from "react";

export function useHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [headerShrink, setHeaderShrink] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [newFlag, setNewFlag] = useState<Record<string, boolean>>({});

  // Use useCallback to avoid re-registering listener unnecessarily
  const headerFunc = useCallback(() => {
    setHeaderShrink(window.scrollY > 80);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);
    return () => window.removeEventListener("scroll", headerFunc);
  }, [headerFunc]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const flag: Record<string, boolean> = {};
    navLinks.forEach((link) => {
      const viewed = localStorage.getItem(`viewed-${link.name}`);
      flag[link.name] = !viewed;
    });
    setNewFlag(flag);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, path: string, name: string) => {
      if (path === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (path.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(path);
        if (target) {
          const offsetTop =
            (target as HTMLElement).getBoundingClientRect().top +
            window.pageYOffset -
            80;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      }
      localStorage.setItem(`viewed-${name}`, "true");
      setNewFlag((prev) => ({ ...prev, [name]: false }));
      setIsOpen(false);
    },
    []
  );

  return {
    isOpen,
    newFlag,
    setIsOpen,
    setNewFlag,
    headerShrink,
    headerRef,
    handleNavClick,
  };
}
