export default function Stats() {
  const data = [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Happy Clients', value: '10+' }
  ];
  return (
    <div className="grid grid-cols-3 gap-8 text-center">
      {data.map(({ label, value }) => (
        <div key={label}>
          <h3 className="text-4xl font-semibold mb-2">{value}</h3>
          <p>{label}</p>
        </div>
      ))}
    </div>
  );
}