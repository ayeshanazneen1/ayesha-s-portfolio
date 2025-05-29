// components/HomeSection.jsx
"use client";

import Image from "next/image";
import AnimatedTitle from "./animatedTitle";

const socialIcons = [
  {
    href: "https://github.com/ayeshanazneen1",
    src: "/homePage/githubIcon.png",
    alt: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/ayesha-nazneen-690283271/",
    src: "/homePage/linkedInIcon.png",
    alt: "LinkedIn",
  },
  {
    href: "mailto:ayeshanazneen13@gmail.com",
    src: "/homePage/gmailIcon.png",
    alt: "Email",
  },
];

export default function HomeSection() {
  return (
    <section
      id="home"
      className="h-screen bg-[#EEE9DB] text-[#3F3B37] relative overflow-hidden"
    >
      {/* Decorative arrow */}
      <div className="absolute top-36 left-2 z-10">
        <Image
          src="/homePage/arrow.svg"
          alt="Decorative curly arrow"
          width={120}
          height={120}
          className="text-primary-green transition-transform duration-300 transform hover:scale-110 hover:translate-x-2 hover:-translate-y-2"
        />
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center h-full space-x-3 px-26">
        {/* LEFT column */}
        <div className="space-y-2 mx-4">
          <h1 className="text-8xl font-extrabold leading-tight whitespace-nowrap">
            {/* ROW 1: Name + Icon */}
            <div className="flex items-center space-x-2">
              <span className="text-[#FF7C98]">Ayesha Nazneen</span>
              <Image
                src="/homePage/bowtie.png"
                alt="Brand icon"
                width={48}
                height={48}
                className="inline-block"
              />
            </div>

            {/* ROW 2: Animated Title */}
            <div className="relative h-[2rem] mb-6">
              <AnimatedTitle className="text-4xl" />
            </div>
          </h1>

          <p className="text-base">
            As a Software Engineer, I get motivated by the opportunity to develop
            solutions that drive a meaningful impact to the world.
          </p>

          <div className="flex space-x-4 mt-6">
            <a
              href="#portfolio"
              className="
                inline-block
                px-8 py-3
                bg-[#CFC9B5] text-[#3F3B37]
                rounded-full
                font-semibold
                uppercase tracking-wide
                shadow-md
                transition-transform transition-colors duration-300
                hover:bg-[#3F3B37] hover:text-[#CFC9B5]
                hover:-translate-y-1 hover:scale-105
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#59E086]
              "
            >
              See Work
            </a>
          </div>
        </div>

        {/* RIGHT column */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative">
            <Image
              src="/homePage/ayeshaDP.png"
              alt="Ayesha's portrait"
              width={350}
              height={350}
              className="rounded-full shadow-lg"
            />

            {/* Social icons */}
            <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
              {socialIcons.map(({ href, src, alt }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#CFC9B5] rounded-full hover:bg-[#A9A28E] transition"
                >
                  <Image src={src} alt={alt} width={25} height={25} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
