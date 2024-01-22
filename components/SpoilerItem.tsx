"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  title: string;
  text: string;
};

export default function SpoilerItem({ title, text }: Props) {
  const [isOpen, toggleHidden] = useState(false);
  const [mounted, toggleMounted] = useState(false);

  useEffect(() => {
    toggleMounted(true);
  }, []);

  return (
    <div>
      {mounted && (
        <button
          className="flex items-center justify-between bg-transparent cursor-pointer p-0 border-0 w-full mb-1"
          onClick={() => toggleHidden(!isOpen)}
        >
          <h5 className="font-medium text-black text-start mr-2">{title}</h5>
          <Image
            src="/icons/angle-down.svg"
            width={9}
            height={5}
            alt="arrow down"
            className={`${isOpen && "rotate-180"} transition-transform`}
          />
        </button>
      )}
      <div>
        <p
          className={`${
            isOpen && "opacity-100 h-full max-h-96"
          } flex flex-col h-0 max-h-0 opacity-0 overflow-hidden transition-all duration-500`}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
