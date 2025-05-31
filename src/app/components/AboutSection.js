// components/AboutSection.jsx
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#3F3B37] text-[#EEE9DB]">
      <div className="container mx-auto">
        {/* Two‐column: Image on left, text + stats on right */}
        <div className="grid grid-cols-2 gap-y-8 items-center mr-28">
          {/* LEFT: Image */}
          <div className="flex justify-center">
            <div className="relative w-full">
              <Image
                src="/about/about_image.jpg"
                alt="Working at computer"
                width={400}
                height={400}
                className="shadow-lg object-cover"
                priority
              />
            </div>
          </div>

          {/* RIGHT: Text + Stats */}
          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-center mb-12">
              Shaping my career
            </h2>
            {/* Bio paragraph */}
            <p className="text-lg leading-relaxed">
              I transitioned from a medical background into computer science,
              embracing the discipline by teaching myself foundational concepts
              from the ground up. Early on, I discovered that building systems
              resonated deeply with me. My first professional engagement
              involved developing a native Android application for a client—an
              app that is now live on the Google Play Store. After that, I
              expanded into web development and created a project that earned
              first place at the COMSATS Career Expo 2024. Today, I am actively
              working on multiple MERN-stack projects while continuously
              strengthening my skills in data structures and algorithms.
            </p>

            {/* Stats Row */}
            <div className="flex justify-around items-center space-x-8">
              <div className="text-center">
                <h3 className="text-5xl font-extrabold">02+</h3>
                <p className="mt-1 text-gray-300">Years Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-5xl font-extrabold">08+</h3>
                <p className="mt-1 text-gray-300">Projects Completed</p>
              </div>
              <div className="text-center">
                <h3 className="text-5xl font-extrabold">05+</h3>
                <p className="mt-1 text-gray-300">Satisfied Clients</p>
              </div>
            </div>

            {/* Separator line */}
            <div className="h-[2px] bg-gradient-to-r from-[#8C867D] via-[#F2EEE7] to-[#8C867D] rounded-full mx-auto my-5"></div>

            {/* Contact Info */}
            <div className="flex flex-row justify-between text-center text-gray-400 space-y-4">
              <div>
                <span className="font-semibold text-white">Email:</span>{" "}
                ayeshanazneen13@gmail.com
              </div>
              <div>
                <span className="font-semibold text-white">Phone:</span> +92 313
                4487104
              </div>
              <div>
                <span className="font-semibold text-white">Location:</span>{" "}
                Pakistan
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}