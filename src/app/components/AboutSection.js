import Stats from './Stats';
export default function AboutSection() {
  return (
    <section id="about" className="container mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="mb-8 max-w-2xl">
        {/* Write a brief bio here */}
        I am a software engineer specializing in app development with Next.js and modern frameworks...
      </p>
      <Stats />
    </section>
  );
}