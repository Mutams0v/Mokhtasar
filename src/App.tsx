import { LanguageProvider } from "./i18n/LanguageContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Services } from "./sections/Services";
import { FinishingList } from "./sections/FinishingList";
import { Process } from "./sections/Process";
import { ChinaTrip } from "./sections/ChinaTrip";
import { Products } from "./sections/Products";
import { WhyUs } from "./sections/WhyUs";
import { FAQ } from "./sections/FAQ";
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
        <Services />
        <FinishingList />
        <Process />
        <ChinaTrip />
        <Products />
        <WhyUs />
        <FAQ />
        <Audience />
        <Coverage />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
