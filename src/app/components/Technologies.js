const tech = ['Next.js','React','Node.js','Tailwind CSS','MongoDB'];
export default function Technologies() {
  return (
    <section id="tech" className="container mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-6">Technologies</h2>
      <div className="flex flex-wrap gap-4">
        {tech.map((t) => (
          <span key={t} className="px-4 py-2 bg-gray-200 rounded-full">{t}</span>
        ))}
      </div>
    </section>
  );
}