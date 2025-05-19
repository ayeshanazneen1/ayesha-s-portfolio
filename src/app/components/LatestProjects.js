export default function LatestProjects() {
  const projects = [
    { title: 'Project One', desc: 'A Next.js App', link: '#' },
    { title: 'Project Two', desc: 'Mobile App', link: '#' },
    { title: 'Project Three', desc: 'Dashboard', link: '#' }
  ];
  return (
    <section id="projects" className="container mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-6">Latest Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <a key={p.title} href={p.link} className="border p-6 rounded-xl hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p>{p.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}