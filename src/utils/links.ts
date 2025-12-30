import { Github, Instagram, Linkedin } from "lucide-react";

// Props
interface Links {
  name: string;
  path: string;
}

export const navLinks: Links[] = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "#about-us" },
  { name: "Events", path: "#events" },
  { name: "Sponsors", path: "#sponsors" },
  { name: "Faq", path: "#faq" },
  // { name: "Blog", path: "/blog" },
];
