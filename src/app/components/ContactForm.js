export default function ContactForm() {
  return (
    <section id="contact" className="container mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form className="grid grid-cols-1 gap-6 max-w-lg">
        <input type="text" placeholder="Your Name" className="border p-3 rounded" required />
        <input type="email" placeholder="Your Email" className="border p-3 rounded" required />
        <textarea placeholder="Your Message" rows={5} className="border p-3 rounded" required />
        <button type="submit" className="py-3 px-6 bg-blue-600 text-white rounded hover:bg-blue-700">Send Message</button>
      </form>
    </section>
  );
}