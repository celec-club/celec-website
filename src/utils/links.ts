// Props
interface SocialLinks {
  [key: string]: string;
}
interface Links {
  name: string;
  path: string;
}

export const socialLinks: SocialLinks = {
  linkedIn: "http://linkedin.com/company/",
  instagram: "https://instagram.com/celec_usthb",
  github: "https://github.com/celec-club/",
  contribute: "https://registrations.celec.codes/",
};

export const navLinks: Links[] = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "#about-us" },
  { name: "Events", path: "#events" },
  { name: "Faq", path: "#faq" },
  // { name: "Blog", path: "/blog" },
];
