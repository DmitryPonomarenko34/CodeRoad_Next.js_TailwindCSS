import FormContact from "@/components/FormContact";
import React from "react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <section className="py-7 sm:py-16">
      <div className="container">
        <div className="grid grid-col-1 sm:grid-cols-2 gap-8">
          <div className="sm:self-end sm:pb-7">
            <h1 className="title text-start">Let’s Talk</h1>
            <p className="mb-4">
              You can contact us by sending an email to our support team at
              support@coderoad.co. We`ll do our best to respond to your query as
              quickly as possible.
            </p>
            <ul className="lg:flex">
              <li className="mb-4 lg:mb-0 lg:mr-6 lg:pr-6 lg:border-0 lg:border-r-2 lg:border-primary/50">
                <span className="title text-lg sm:text-3xl block text-start">
                  Email
                </span>
                <p>support@coderoad.co.uk</p>
              </li>
              <li>
                <span className="title text-lg sm:text-3xl block text-start">
                  Social
                </span>
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
              </li>
            </ul>
          </div>
          <div className="-mx-4 sm:mx-0">
            <FormContact />
          </div>
        </div>
      </div>
    </section>
  );
}
