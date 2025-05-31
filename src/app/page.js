import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import LatestProjects from './components/LatestProjects';
import Technologies from './components/Technologies';
import Services from './components/Services';
import ContactForm from './components/ContactForm';

export default function Home() {
  return (
    <main>
      <HomeSection />
      <AboutSection />
      <LatestProjects />
      <Technologies />
      <Services />
      <ContactForm />
    </main>
  );
}