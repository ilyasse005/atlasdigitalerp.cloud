import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import CustomDevelopment from './components/CustomDevelopment';
import WebDevelopment from './components/WebDevelopment';
import Process from './components/Process';
import Industries from './components/Industries';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg font-sans selection:bg-brand-primary/30">
      <Header />
      <main>
        <Hero />
        <Services />
        <CustomDevelopment />
        <WebDevelopment />
        <Process />
        <Industries />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
