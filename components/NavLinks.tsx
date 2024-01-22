"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MenuBtn from "./MenuBtn";

export default function NavLinks() {
  const [isOpen, toggleMenu] = useState(false);
  const path = usePathname();

  const isPath = (pathName: string) => {
    return path.split("/").pop() === pathName;
  };

  const closeMenu = () => {
    toggleMenu(false);
  };

  return (
    <nav>
      <MenuBtn isOpen={isOpen} toggleMenu={() => toggleMenu(true)} />
      <ul className={`${isOpen && "translate-y-0"} menu`}>
        <li className="mb-2 lg:mb-0">
          <MenuBtn isOpen={isOpen} toggleMenu={() => toggleMenu(false)} />
        </li>
        <li className="menu-item">
          <Link
            className={`${
              isPath("") && "active-link"
            } nav-link flex items-center lg:block`}
            href="/"
            onClick={closeMenu}
          >
            <Image
              className={`${isPath("") ? "block lg:hidden" : "hidden"} mr-2`}
              alt="home icon"
              src="/icons/home.svg"
              width={18}
              height={20}
            />
            Home
          </Link>
        </li>
        <li className="menu-item">
          <Link
            className={`${isPath("about") && "active-link"} nav-link`}
            href="/about"
            onClick={closeMenu}
          >
            About Us
          </Link>
        </li>
        <li className="menu-item">
          <a className="nav-link" href="/#courses" onClick={closeMenu}>
            Courses
          </a>
        </li>
        <li className="menu-item">
          <a className="nav-link" href="/#pricing" onClick={closeMenu}>
            Pricing
          </a>
        </li>
        <li className="menu-item">
          <Link
            className={`${isPath("contact") && "active-link"} nav-link`}
            href="/contact"
            onClick={closeMenu}
          >
            Contact Us
          </Link>
        </li>
        <li className="border-solid border-t-2 lg:flex lg:items-center lg:border-0">
          <Link
            className={`${
              isPath("register") && "active-link"
            } nav-link lg:underline lg:decoration-1 lg:mr-2 xl:mr-6 lg:border-t-0 lg:border-l-2 lg:border-black/80 lg:pl-2 xl:pl-4 lg:rounded-none`}
            href="/register"
            onClick={closeMenu}
          >
            Register
          </Link>
          <Link
            className={`${
              isPath("login") && "active-link lg:bg-secondary/50"
            } nav-link text-tertiary lg:hover:text-white transition-colors lg:hover:bg-secondary/100 lg:py-2 lg:px-5 lg:bg-secondary/70 lg:font-normal lg:rounded-lg lg:text-white `}
            href="/login"
            onClick={closeMenu}
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
