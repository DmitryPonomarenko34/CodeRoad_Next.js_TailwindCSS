"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  isOpen: boolean;
  toggleMenu: (isOpen: boolean) => void;
};

export default function MenuBtn({ isOpen, toggleMenu }: Props) {
  const [mounted, toggleMount] = useState(false);

  useEffect(() => {
    toggleMount(true);
  }, []);

  return (
    <div>
      {mounted && (
        <button
          className="lg:hidden"
          onClick={() => {
            toggleMenu(isOpen);
          }}
        >
          {isOpen ? (
            <Image
              src="/icons/menu-close.svg"
              alt="close menu"
              width={36}
              height={36}
            />
          ) : (
            <Image
              src="/icons/menu-open.svg"
              alt="close menu"
              width={36}
              height={36}
            />
          )}
        </button>
      )}
    </div>
  );
}
