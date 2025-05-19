import Link from 'next/link';
export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-xl font-bold">My Portfolio</Link>
        <div className="space-x-6">
          {['Home','About','Projects','Tech','Services','Contact'].map((section) => (
            <a key={section} href={`#${section.toLowerCase()}`} className="hover:text-blue-600">{section}</a>
          ))}
        </div>
      </nav>
    </header>
  );
}