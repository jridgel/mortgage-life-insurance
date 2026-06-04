import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyNow from './components/WhyNow';
import HowItWorks from './components/HowItWorks';
import CoverageOptions from './components/CoverageOptions';
import Testimonials from './components/Testimonials';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WhyNow />
      <HowItWorks />
      <CoverageOptions />
      <Testimonials />
      <QuoteForm />
      <Footer />
    </div>
  );
}
