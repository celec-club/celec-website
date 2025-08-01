interface NavLink {
  name: string;
  path: string;
}

export const navLinks: NavLink[] = [
  { name: "Home", path: "/" },
  { name: "Events", path: "#events" },
  { name: "Blog", path: "/blog" },
  { name: "About us", path: "#about" },
];
