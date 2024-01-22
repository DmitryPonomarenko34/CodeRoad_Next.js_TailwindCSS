"use client";
import Image from "next/image";
import Card from "@/components/Card";
import frontEndData from "@/frontEndData.json";
import backEndData from "@/backEndData.json";
import { useEffect, useState } from "react";

type TabsType = "frontEnd" | "backEnd";

export default function Tabs() {
  let data = frontEndData;
  const [tab, toggleTab] = useState<TabsType>("frontEnd");
  const [mounted, toggleMounted] = useState(false);

  useEffect(() => {
    toggleMounted(true);
  }, []);

  if (tab === "backEnd") {
    data = backEndData;
  }

  if (tab === "frontEnd") {
    data = frontEndData;
  }

  return (
    <div>
      <div className="flex items-center justify-center gap-3 mb-6">
        <Image
          className="block w-11 h-12 max-w-full flex-shrink"
          alt="html icon"
          src="/icons/html.svg"
          width={59}
          height={66}
        />
        <Image
          className="block w-11 h-12 max-w-full flex-shrink"
          alt="css icon"
          src="/icons/css.svg"
          width={59}
          height={66}
        />
        <Image
          className="block w-11 h-12 max-w-full flex-shrink"
          alt="css icon"
          src="/icons/javascript.svg"
          width={68}
          height={66}
        />
        <Image
          className="block w-11 h-12 max-w-full flex-shrink"
          alt="css icon"
          src="/icons/react.svg"
          width={68}
          height={60}
        />
        <Image
          className="block w-11 h-12 max-w-full flex-shrink"
          alt="css icon"
          src="/icons/redux.svg"
          width={68}
          height={60}
        />
      </div>
      {mounted && (
        <div className="flex justify-center mb-6">
          <button
            className={`${
              tab === "frontEnd" &&
              "bg-primary/70 pointer-events-none shadow-none"
            } bg-primary btn-shadow py-4 px-8 text-white rounded-2xl text-sm inline-block mr-2 hover:bg-opacity-80 transition-colors`}
            onClick={() => toggleTab("frontEnd")}
          >
            Front-End
          </button>
          <button
            className={`${
              tab === "backEnd" &&
              "bg-primary/70 pointer-events-none shadow-none"
            } bg-primary btn-shadow py-4 px-8 text-white rounded-2xl text-sm inline-block mr-2 hover:bg-opacity-80 transition-colors`}
            onClick={() => toggleTab("backEnd")}
          >
            Back-End
          </button>
        </div>
      )}
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-7 min-h-[477px]">
        {data.map((card) => (
          <li key={card.id} className="flex">
            <Card title={card.title} content={card.content} />
          </li>
        ))}
      </ul>
    </div>
  );
}
