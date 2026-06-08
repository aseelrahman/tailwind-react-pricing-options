import { Menu, X } from "lucide-react";
import Link from "./Link";
import { useState } from "react";

const navItems = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    id: 5,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 6,
    name: "Contact",
    path: "/contact",
  },
];
const NavBar = () => {
  const [open, setOpen] = useState(false);

  const links = navItems.map((item) => <Link key={item.id} item={item} />);

  return (
    <nav className="flex justify-between mx-6 my-4 ">
      <span className="flex gap-2" onClick={() => setOpen(!open)}>
        {open ? <X className="md:hidden" /> : <Menu className="md:hidden" />}
        <ul className={`md:hidden absolute duration-1000 ${open? 'top-10' : '-top-40'} bg-amber-300 text-black`}>{links}</ul>

        <h3>My Navbar</h3>
      </span>
      <ul className="md:flex hidden gap-10">{links}</ul>

      {/* <ul className="flex">
        <li className="mr-10">
          <a href="/">Home</a>
        </li>
        <li className="mr-10">
          <a href="/about">About</a>
        </li>
        <li className="mr-10">
          <a href="/blog">Blog</a>
        </li>
      </ul> */}
      <button>Sign In</button>
    </nav>
  );
};

export default NavBar;
