import { LanguageProvider } from "./i18n/LanguageContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { WhyChina } from "./sections/WhyChina";
import { SpecCompare } from "./sections/SpecCompare";
import { Paths } from "./sections/Paths";
import { FinishingList } from "./sections/FinishingList";
import { Warranty } from "./sections/Warranty";
import { Projects } from "./sections/Projects";
import { Testimonials } from "./sections/Testimonials";
import { Audience } from "./sections/Audience";
import { Library } from "./sections/Library";
import { FAQ } from "./sections/FAQ";
import { Measure } from "./sections/Measure";

function App() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <WhyChina />
        <SpecCompare />
        <Paths />
        <FinishingList />
        <Warranty />
        <Projects />
        <Testimonials />
        <Audience />
        <Library />
        <FAQ />
        <Measure />
      </main>
      <Footer />
      <WhatsAppButton />
    </LanguageProvider>
  );
}

export default App;
