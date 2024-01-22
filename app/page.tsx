import Tabs from "@/components/Tabs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="py-7 lg:pb-24">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="sm:w-6/12 md:w-4/12">
              <p className="mb-3 md:mb-0 md:mr-4">
                At Code Road, we`re passionate about guiding those who want to
                become <span className="font-bold">software engineers</span> and
                helping them{" "}
                <span className="font-bold">
                  land their first role in the industry.
                </span>
              </p>
              <p className="mb-10">
                Join us today and start your journey to success!
              </p>
              <button className="bg-tertiary/70 py-3 px-5 rounded-lg text-xs hover:opacity-80 transition-opacity">
                Contact Us
              </button>
            </div>
            <div className="translate-x-2/4 md:translate-x-0 md:w-6/12 lg:translate-x-0 relative mb-12">
              <Image
                className="decor-image sm:w-full"
                alt="illustration"
                src="/illustration.svg"
                width={657}
                height={529}
                priority
              />
              <div className="hidden lg:block w-11/12 h-3/4 absolute -left-1/4 bottom-0">
                <Image
                  className="z-10"
                  alt="bg"
                  src="/first.png"
                  fill
                  priority
                />
              </div>
              <div className="bg-background w-8 h-8 lg:w-16 lg:h-16 lg:p-3 rounded-full absolute -left-2 -top-2 decor-code">
                <Image
                  className="w-5 h-5 lg:w-auto lg:h-auto"
                  alt="html icon"
                  src="/icons/html.svg"
                  width={36}
                  height={36}
                />
              </div>
              <div className="bg-background w-8 h-8 lg:w-16 lg:h-16 lg:p-3 lg:left-2/4 lg:top-10 rounded-full absolute left-1/4 top-1/4 decor-code">
                <Image
                  className="w-5 h-5 lg:w-auto lg:h-auto"
                  alt="css icon"
                  src="/icons/css.svg"
                  width={36}
                  height={36}
                />
              </div>
              <div className="bg-background w-8 h-8 lg:w-16 lg:h-16 lg:p-3 lg:left-2/4 lg:top-2/4 lg:translate-0 lg:-translate-y-11 rounded-full absolute left-1/3 right-1/2 bottom-1/4 decor-code z-10 -translate-y-2 -translate-x-1">
                <Image
                  className="w-5 h-5 lg:w-auto lg:h-auto"
                  alt="css icon"
                  src="/icons/javascript.svg"
                  width={36}
                  height={36}
                />
              </div>
              <div className="bg-yellow-200 w-6 h-8 lg:w-16 lg:h-16 lg:p-3 lg:right-1/3 2xl:-translate-x-5 absolute right-1/2 bottom-1/4 decor-code z-10 rounded-lg">
                <Image
                  className="w-3 h-6 lg:w-auto lg:h-auto"
                  alt="css icon"
                  src="/icons/code.svg"
                  width={12}
                  height={22}
                />
              </div>
              <div className="absolute w-full -left-12 -bottom-12 h-28 bg-background blur-xl"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-7">
        <div className="max-w-[980px] mx-auto px-8">
          <div className="bg-gradient-custom py-8">
            <h2 className="title">How it Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="line-item-decor text-center w-36 sm:w-auto mx-auto">
                <Image
                  className="block mx-auto"
                  alt="marker icon"
                  src="/icons/marker-bg.svg"
                  width={76}
                  height={76}
                />
                <p className="font-medium mb-4">Choose a course</p>
                <p className="text-xs sm:w-48">
                  Select a course from our specially curated tutorials that best
                  suit your learning goals
                </p>
              </div>
              <div className="line-item-decor text-center w-36 sm:w-auto mx-auto">
                <Image
                  className="block mx-auto"
                  alt="calendar icon"
                  src="/icons/calendar-bg.svg"
                  width={76}
                  height={76}
                />
                <p className="font-medium mb-4">Book a mentor session</p>
                <p className="text-xs sm:w-44">
                  Discuss the course material and get guidance about the
                  industry.
                </p>
              </div>
              <div className="line-item-decor text-center w-36 sm:w-auto mx-auto">
                <Image
                  className="block mx-auto"
                  alt="user icon"
                  src="/icons/user-bg.svg"
                  width={76}
                  height={76}
                />
                <p className="font-medium mb-4">Land your first job</p>
                <p className="text-xs sm:w-44">
                  With the help of our mentors and their current knowledge about
                  the industry, ace your interviews and land your first job
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="wrap-gradient">
        <section className="py-7" id="courses">
          <div className="container">
            <h2 className="title">Specially curated tutorials for you</h2>
            <p className="mb-9 text-center max-w-[707px] mx-auto">
              We’ve done the work for you and collected the most sought after
              courses available on the internet, put them into a compact form so
              that you can select and begin learning immediately
            </p>
            <div className="max-w-4xl mx-auto">
              <Tabs />
            </div>
          </div>
        </section>
        <section className="py-7">
          <div className="container xl:pl-11">
            <div className="mb-10 xl:mb-20">
              <h2 className="title">Our Mentors</h2>
              <p className="text-center max-w-[707px] mx-auto">
                Through the mentorship program, students are able to receive{" "}
                <span className="font-bold">one-on-one guidance</span> and{" "}
                <span className=" font-bold">feedback</span> from{" "}
                <span className="font-bold">experienced professionals,</span>
                who can help them navigate the complexities of the software
                engineering field. This can be especially valuable for students
                just starting out in their careers, or who are looking to
                transition into new areas of specialisation.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 xl:gap-12 xl:gap-y-16">
              <div className="bg-transparent xl:bg-background/80 xl:flex xl:rounded-lg xl:relative">
                <Image
                  src="/softwareEngineer.png"
                  className="w-44 h-52 -mb-12 mx-auto xl:mb-0 xl:absolute xl:w-80 xl:h-[366px] xl:-top-14 xl:-left-8"
                  width={278}
                  height={320}
                  alt="Google Software Engineer"
                />
                <div className="bg-background/80 pt-12 px-4 pb-4 rounded-xl xl:pt-6 xl:ml-auto">
                  <div className="font-rubik xl:w-2/4 xl:ml-auto">
                    <div className="flex justify-between mb-2">
                      <h5 className="font-medium">Vincent Plut</h5>
                      <span className="-translate-y-4 sm:translate-y-0">
                        4.5
                      </span>
                    </div>
                    <p className="text-gray-500 mb-4">Santa Monica, USA</p>
                    <p className="before:content-['“'] after:content-['”'] mb-4">
                      Aliquam erat volutpat. Integer malesuada turpis id
                      fringilla suscipit. Maecenas ultrices.Aliquam erat
                      volutpat. Integer malesuad.
                    </p>
                    <Image
                      src="/icons/google.svg"
                      className="block mb-4"
                      width={89}
                      height={29}
                      alt="Google Software Engineer"
                    />
                    <p className="text-gray-500">Software Engineer</p>
                  </div>
                </div>
              </div>
              <div className="bg-transparent xl:bg-background/80 xl:flex xl:rounded-lg xl:relative">
                <Image
                  src="/amazonEngineer.png"
                  className="w-44 h-52 -mb-12 mx-auto xl:mb-0 xl:absolute xl:w-80 xl:h-[366px] xl:-top-14 xl:-left-8"
                  width={278}
                  height={320}
                  alt="Google Software Engineer"
                />
                <div className="bg-background/80 pt-12 px-4 pb-4 rounded-xl xl:pt-6 xl:ml-auto">
                  <div className="font-rubik xl:w-2/4 xl:ml-auto">
                    <div className="flex justify-between mb-2">
                      <h5 className="font-medium">Emel Rassi</h5>
                      <span className="-translate-y-4 sm:translate-y-0">
                        4.5
                      </span>
                    </div>
                    <p className="text-gray-500 mb-4">Santa Monica, USA</p>
                    <p className="before:content-['“'] after:content-['”'] mb-4">
                      Aliquam erat volutpat. Integer malesuada turpis id
                      fringilla suscipit. Maecenas ultrices.Aliquam erat
                      volutpat. Integer malesuad.
                    </p>
                    <Image
                      src="/icons/amazon.svg"
                      className="block mb-4"
                      width={89}
                      height={29}
                      alt="Amazon Software Engineer"
                    />
                    <p className="text-gray-500">Software Engineer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-7">
          <div className="max-w-[832px] px-4 mx-auto">
            <h2 className="title">Admissions Criteria</h2>
            <p className="max-w-[494px] text-center mx-auto mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque ut id congue commodo.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-9">
              <div className="bg-background/80 rounded-xl border-2 border-success/50 py-7 px-6 min-h-[414px]">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-success">What you need</span>
                  <Image
                    alt="succes icon"
                    src="/icons/success.svg"
                    width={21}
                    height={21}
                  />
                </div>
                <ul>
                  <li className="p-3 bg-white rounded-lg mb-8 font-medium pr-14">
                    An interest in learning to code
                  </li>
                  <li className="p-3 bg-white rounded-lg mb-8 font-medium pr-14">
                    Written and spoken English a level B2 or higher
                  </li>
                  <li className="p-3 bg-white rounded-lg mb-8 font-medium pr-14">
                    A computer (MacOS, Windows or Linux) with a webcam,
                    microphone and an internet connection
                  </li>
                </ul>
              </div>
              <div className="bg-background/80 rounded-xl border-2 border-error/50 py-7 px-6 min-h-[414px]">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-error">What you don’t need</span>
                  <Image
                    alt="succes icon"
                    src="/icons/error.svg"
                    width={21}
                    height={21}
                  />
                </div>
                <ul>
                  <li className="p-3 bg-white rounded-lg mb-8 font-medium pr-14">
                    To learn all on your own
                  </li>
                  <li className="p-3 bg-white rounded-lg mb-8 font-medium pr-14">
                    Any previous knowledge
                  </li>
                  <li className="p-3 bg-white rounded-lg mb-8 font-medium pr-14">
                    Unlimited free-time
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-7">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-12 md:mb-8">
              <div className="w-9/12 mx-auto md:mx-0 md:w-auto mb-3 md:mb-0 text-center md:text-start">
                <h2 className="title text-center md:text-start">
                  Personalised Support
                </h2>
                <p>
                  Through the mentorship program, students are able to receive{" "}
                  <span className="font-bold">one-on-one guidance</span> and{" "}
                  <span className="font-bold">feedback</span> from{" "}
                  <span className="font-bold">experienced professionals</span>,
                  who can help them navigate the complexities of the software
                  engineering field. This can be especially valuable for
                  students just starting out in their careers, or who are
                  looking to transition into new areas of specialisation.
                </p>
              </div>
              <div className="dotted-decor-right">
                <Image
                  className="rounded-3xl mx-auto md:mx-0 md:ml-0 max-w-[190px] md:max-w-full md:translate-x-[38%] 2xl:translate-x-[48%] "
                  alt="support image"
                  src="/support.jpg"
                  width={648}
                  height={431}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-12 md:mb-8">
              <div className="dotted-decor-left order-1 md:-order-none">
                <Image
                  className="rounded-3xl mx-auto md:mx-0 max-w-[190px] md:max-w-full md:-translate-x-[38%] 2xl:-translate-x-[40%] "
                  alt="flexibility image"
                  src="/flexibility.jpg"
                  width={715}
                  height={548}
                />
              </div>
              <div className="w-9/12 mx-auto md:mx-0 md:w-auto mb-3 md:mb-0 text-center md:text-start">
                <h2 className="title text-center md:text-start">Flexibility</h2>
                <p>
                  All of the learning materials are{" "}
                  <span className="font-bold">available online</span>, students
                  can study at their <span className="font-bold">own pace</span>{" "}
                  and on their own schedule. This makes it easy to fit learning
                  into busy work or family schedules, and allows students to
                  customise their learning experience to{" "}
                  <span className="font-bold">
                    meet their individual needs.
                  </span>
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-12 md:mb-8">
              <div className="w-9/12 mx-auto md:mx-0 md:w-auto mb-3 md:mb-0 text-center md:text-start">
                <h2 className="title text-center md:text-start">Resources</h2>
                <p>
                  At Code Road, we understand that students often struggle to
                  find the right learning materials amidst the vast sea of
                  online resources. That`s why{" "}
                  <span className="font-bold">
                    we`ve done the heavy lifting for you
                  </span>
                  , and{" "}
                  <span className="font-bold">
                    curated a collection of high-quality, straight-to-the-point
                    content
                  </span>{" "}
                  that`s specifically tailored to software engineering students.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-12 md:mb-8">
              <div className="w-9/12 mx-auto md:mx-0 md:w-auto mb-3 md:mb-0 text-center md:text-start">
                <h2 className="title text-center md:text-start">Connect</h2>
                <p>
                  Use our <span className="font-bold">discord channel</span> to
                  connect with mentors and other learners. This means that
                  students can{" "}
                  <span className="font-bold">
                    ask questions, get feedback,
                  </span>{" "}
                  and collaborate with others, all in a supportive and friendly
                  environment.
                </p>
              </div>
              <Image
                className="rounded-3xl mx-auto md:mx-0 ml-auto md:ml-0 max-w-[310px] md:max-w-full md:translate-x-[38%] 2xl:translate-x-[40%] "
                alt="discord image"
                src="/discord.jpg"
                width={966}
                height={553}
              />
            </div>
          </div>
        </section>
        <section className="py-7" id="pricing">
          <div className="container">
            <h2 className="title">Pricing Plan</h2>
            <p className="max-w-lg mx-auto text-center mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque ut id congue commodo.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto">
              <div className="bg-background py-12 px-10 font-plusjakarta rounded-t-2xl sm:rounded-t-none sm:rounded-l-2xl">
                <div className="flex items-center mb-6">
                  <Image
                    className="block mr-2"
                    alt="ellipse icon"
                    src="/icons/ellipse.svg"
                    width={58}
                    height={58}
                  />
                  <div>
                    <span className="font-medium text-[#6F6C90] block text-sm">
                      For individuals
                    </span>
                    <span className="font-bold block text-lg text-primary">
                      Pro
                    </span>
                  </div>
                </div>
                <p className="text-sm mb-3">
                  Aliquam erat volutpat. Integer malesuada turpis id fringilla
                  suscipit. Maecenas ultrices.
                </p>
                <div className="mb-8">
                  <span className="font-bold text-tertiary text-4xl mr-2">
                    £36
                  </span>
                  <span className="before:content-['/'] font-medium">
                    3 month access
                  </span>
                </div>
                <Link
                  className="py-4 px-8 bg-primary/70  hover:opacity-80 transition-opacity rounded-xl w-40 text-white mx-auto text-center block"
                  href="/"
                >
                  Apply Now
                </Link>
              </div>
              <div className="bg-background/70 py-12 px-10 rounded-b-2xl sm:rounded-b-none sm:rounded-r-2xl">
                <span className="text-primary text-sm font-bold mb-5 block">
                  What’s included
                </span>
                <ul>
                  <li className="custom-ic">Access to mentors</li>
                  <li className="custom-ic">Career Support</li>
                  <li className="custom-ic">Course Material Guidance</li>
                  <li className="custom-ic">3-months fully-remote</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-7 ">
          <div className="bg-black/50 py-4">
            <h2 className="title text-white">Our Students Work At</h2>
            <div className="container">
              <div className="grid grid-cols-3 lg:grid-flow-col gap-10 lg:gap-20 justify-center">
                <Image
                  alt="google icon"
                  src="/icons/google-light.svg"
                  width={109}
                  height={28}
                />
                <Image
                  alt="airbnb icon"
                  src="/icons/airbnb.svg"
                  width={116}
                  height={36}
                />
                <Image
                  alt="creative icon"
                  src="/icons/creative.svg"
                  width={110}
                  height={42}
                />
                <Image
                  alt="snopify icon"
                  src="/icons/snopify.svg"
                  width={126}
                  height={36}
                />
                <Image
                  alt="amazon icon"
                  src="/icons/amazon-light.svg"
                  width={118}
                  height={35}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
