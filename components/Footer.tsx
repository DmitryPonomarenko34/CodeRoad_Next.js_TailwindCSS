import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="wrap-gradient-footer font-plusjakarta font-medium">
      <div className="bg-background/70 py-20 backdrop-blur-md">
        <div className="container">
          <div className="grid grid-cols-2 justify-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7 border-b-2 border-[#131313]/10 pb-9">
            <div className="col-span-2 sm:col-span-1 xl:col-span-2">
              <div className="mb-4">
                <Logo />
              </div>
              <p className="mb-4">
                Our vision is to provide an efficient and reliable way for you
                to achieve your career goals.
              </p>
              <ul className="flex items-center gap-5">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center w-8 h-8 bg-background shadow-lg rounded-full hover:-translate-y-1 transition-transform"
                  >
                    <Image
                      alt="facebook"
                      src="/icons/facebook.svg"
                      width={16}
                      height={16}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center w-8 h-8 bg-background shadow-lg rounded-full hover:-translate-y-1 transition-transform"
                  >
                    <Image
                      alt="twitter"
                      src="/icons/twitter.svg"
                      width={16}
                      height={16}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center w-8 h-8 bg-background shadow-lg rounded-full hover:-translate-y-1 transition-transform"
                  >
                    <Image
                      alt="instagram"
                      src="/icons/instagram.svg"
                      width={16}
                      height={16}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center w-8 h-8 bg-background shadow-lg rounded-full hover:-translate-y-1 transition-transform"
                  >
                    <Image
                      alt="discord"
                      src="/icons/discord.svg"
                      width={16}
                      height={16}
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl mb-6 font-semibold">About</h4>
              <ul>
                <li className="mb-3">
                  <Link
                    href="/"
                    className="hover:text-tertiary transition-colors"
                  >
                    How it works
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="/"
                    className="hover:text-tertiary transition-colors"
                  >
                    Featured
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="/"
                    className="hover:text-tertiary transition-colors"
                  >
                    Partnership
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="hover:text-tertiary transition-colors"
                  >
                    Business Relation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl mb-6 font-semibold">Community</h4>
              <ul>
                <li className="mb-3">
                  <Link
                    href="/"
                    className="hover:text-tertiary transition-colors"
                  >
                    Events
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="/"
                    className="hover:text-tertiary transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="/"
                    className="hover:text-tertiary transition-colors"
                  >
                    Podcast
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="hover:text-tertiary transition-colors"
                  >
                    Invite a friend
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl mb-6 font-semibold">Socials</h4>
              <ul>
                <li className="mb-3">
                  <Link
                    href="/"
                    className="hover:text-tertiary transition-colors"
                  >
                    Discord{" "}
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="/"
                    className="hover:text-tertiary transition-colors"
                  >
                    Instagram
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="/"
                    className="hover:text-tertiary transition-colors"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="hover:text-tertiary transition-colors"
                  >
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-9">
            <div className="sm:flex items-center justify-between font-semibold">
              <p className="mb-2 sm:mb-0 sm:mr-2">
                ©2023 Code Road. All rights reserved
              </p>
              <div className="sm:flex">
                <Link
                  href="/"
                  className="mb-2 sm:mr-2 block hover:text-tertiary transition-colors"
                >
                  Privacy & Policy
                </Link>
                <Link
                  href="/"
                  className="block hover:text-tertiary transition-colors"
                >
                  Terms & Condition
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
