import { useEffect, useRef } from "react";

import { Card } from "./Card";

export default function Header() {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth scrolling for navigation
    if (!navRef.current) return;

    navRef.current.addEventListener("click", (e) => {
      e.preventDefault();
      const linkTarget = e.target as HTMLElement;

      const href = linkTarget.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }, []);

  return (
    <header>
      <nav ref={navRef} className="flex justify-center gap-6 mb-20 flex-nowrap">
        <Card>
          <a href="#skills" className="z-1 py-4 px-8">
            Skills
          </a>
        </Card>
        <Card>
          <a href="#projects" className="z-1 py-4 px-8">
            Projects
          </a>
        </Card>
        <Card>
          <a href="#contact" className="z-1 py-4 px-8">
            Contact
          </a>
        </Card>
      </nav>
    </header>
  );
}
