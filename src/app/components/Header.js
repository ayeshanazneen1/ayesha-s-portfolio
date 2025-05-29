// components/Header.jsx
import Link from "next/link";

export default function Header() {
  const sections = ["Home", "Portfolio", "About", "Testimonial", "Contact"];

  return (
    <header className="bg-[#EEE9DB] w-full z-50">
      <nav className="container mx-auto flex justify-between items-center px-8 py-6">
        <Link href="/" className="text-2xl font-bold text-[#3F3B37]">
          AYESHA NAZNEEN
        </Link>
        <ul className="flex space-x-8">
          {sections.map((sec) => (
            <li key={sec} className="group relative">
              <a
                href={`#${sec.toLowerCase()}`}
                className="text-[#3F3B37] uppercase tracking-wider transition-all duration-300 hover:text-[#2C2926] hover:tracking-widest hover:scale-105"
              >
                {sec}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
