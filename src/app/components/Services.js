const services = [
  'Web App Development',
  'Mobile App Development',
  'UI/UX Design',
  'API Integration'
];
export default function Services() {
  return (
    <section id="services" className="container mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-6">Services</h2>
      <ul className="list-disc pl-6 space-y-2">
        {services.map((s) => (<li key={s}>{s}</li>))}
      </ul>
    </section>
  );
}