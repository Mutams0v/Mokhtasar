import { LanguageProvider } from "./i18n/LanguageContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Services } from "./sections/Services";
import { Process } from "./sections/Process";
import { Products } from "./sections/Products";
import { WhyUs } from "./sections/WhyUs";
import { Audience } from "./sections/Audience";
import { Coverage } from "./sections/Coverage";
import { Contact } from "./sections/Contact";

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-secondary">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Process />
          <Products />
          <WhyUs />
          <Audience />
          <Coverage />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
