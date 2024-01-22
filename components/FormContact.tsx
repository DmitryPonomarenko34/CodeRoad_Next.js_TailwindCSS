"use client";
import React from "react";

export default function FormContact() {
  return (
    <form
      className="p-8 lg:px-16 relative sm:rounded-tl-[64px] form-bg"
      action="#"
    >
      <label className="block w-full mb-6">
        <span className="block mb-3">Name</span>
        <input
          type="text"
          className="block w-full rounded-lg h-11 px-4 shadow-inner focus:outline-none border-2 focus:border-primary"
        />
      </label>
      <label className="block w-full mb-6">
        <span className="block mb-3">Email</span>
        <input
          type="email"
          className="block w-full rounded-lg h-11 px-4 shadow-inner focus:outline-none border-2 focus:border-primary"
        />
      </label>
      <label className="block w-full mb-6">
        <span className="block mb-3">Message</span>
        <textarea className="resize-none h-36 block shadow-inner w-full rounded-lg p-4 focus:outline-none border-2 focus:border-primary" />
      </label>
      <button
        type="submit"
        className="block w-full text-center border-0 text-white bg-primary/70 hover:opacity-80 transition-opacity rounded-xl py-4 px-6] z-10 relative"
      >
        Submit
      </button>
      <div className="hidden sm:block absolute w-full -left-12 -bottom-12 h-28 bg-background blur-xl"></div>
    </form>
  );
}
