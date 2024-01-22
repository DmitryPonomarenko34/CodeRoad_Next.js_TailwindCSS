import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="wrap-gradient">
      <section className="py-7">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center mb-8 gap-6">
            <div className="w-11/12 mb-3 md:mb-0">
              <h2 className="hidden md:block title text-start">About Us</h2>
              <p>
                Code Road was founded by{" "}
                <span className="font-bold">Shan Gardezi</span> in 2019, with
                the goal of providing accessible and high-quality resources to
                aspiring software engineers. Shan himself had experienced the
                challenges of self-learning, and recognised the need for a
                platform that could provide both structure and support to
                students.
              </p>
            </div>
            <div className="flex items-center md:block md:col-span-2 dotted-decor-right lg:before:left-2 2xl:before:left-0 2xl:before:top-full">
              <h2 className="mr-2 shrink-0 block md:hidden title text-start">
                About Us
              </h2>
              <Image
                className="ml-auto w-9/12 md:w-full"
                alt="ownner image"
                src="/shan.png"
                width={772}
                height={554}
                priority
              />
              <div className="absolute w-full -left-6 -bottom-6 md:-left-12 md:-bottom-12 h-14 md:h-28 bg-background blur-xl"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-8">
            <div className="dotted-decor-left">
              <Image
                className="rounded-3xl mx-auto md:mx-0  md:max-w-full md:-translate-x-[38%] 2xl:-translate-x-[40%] opacity-20 decor-image"
                alt="support image"
                src="/support.jpg"
                width={648}
                height={431}
              />
            </div>
            <div className="sm:w-7/12 md:w-auto ml-auto md:ml-0 order-first  md:text-start md:order-none mb-2 md:mb-0">
              <p>
                Shan`s background in software engineering and education made him
                uniquely suited to create Code Road. He had previously worked as
                a software engineer for several years before transitioning into
                teaching and mentoring, and had seen firsthand the impact that
                effective education and mentorship could have on a student`s
                success.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-8">
            <div className="sm:w-7/12 md:w-auto ml-auto md:ml-0  md:text-start mb-2 md:md-0">
              <p>
                With a deep passion for education and a commitment to
                excellence, Shan set out to create a platform that could help
                students learn the skills they needed to succeed in the
                fast-paced world of technology. He assembled a team of
                experienced developers, educators, and mentors, and began
                building a platform that could provide personalized feedback,
                engaging resources, and a supportive community.
              </p>
            </div>
            <div className="dotted-decor-right">
              <Image
                className="rounded-3xl mx-auto md:mx-0 ml-auto md:ml-0 max-w-[310px] md:max-w-full md:translate-x-[38%] 2xl:translate-x-[40%]"
                alt="discord image"
                src="/discord.jpg"
                width={966}
                height={553}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-8">
            <div>
              <Image
                className="rounded-3xl mx-auto md:mx-0  md:max-w-full md:-translate-x-[38%] 2xl:-translate-x-[40%] opacity-20"
                alt="support image"
                src="/support.jpg"
                width={648}
                height={431}
              />
            </div>
            <div className="sm:w-7/12 md:w-auto ml-auto md:ml-0 order-first  md:text-start md:order-none mb-2 md:mb-0">
              <p>
                Shan`s background in software engineering and education made him
                uniquely suited to create Code Road. He had previously worked as
                a software engineer for several years before transitioning into
                teaching and mentoring, and had seen firsthand the impact that
                effective education and mentorship could have on a student`s
                success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
