import { LanguageProvider } from "./i18n/LanguageContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Services } from "./sections/Services";
import { FinishingList } from "./sections/FinishingList";
import { Process } from "./sections/Process";
import { ChinaTrip } from "./sections/ChinaTrip";
import { Products } from "./sections/Products";
import { Projects } from "./sections/Projects";
import { WhyUs } from "./sections/WhyUs";
import { Commitments } from "./sections/Commitments";
import { FAQ } from "./sections/FAQ";
import { Testimonials } from "./sections/Testimonials";
import { Audience } from "./sections/Audience";
import { Coverage } from "./sections/Coverage";
import { Contact } from "./sections/Contact";

function App() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Audience />
        <Services />
        <Process />
        <ChinaTrip />
        <FinishingList />
        <Products />
        <Projects />
        <WhyUs />
        <Commitments />
        <Testimonials />
        <FAQ />
        <Coverage />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </LanguageProvider>
  );
}

export default App;
