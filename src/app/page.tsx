import About from "@/shared/About/page";
import Events from "@/shared/Events/page";
import Footer from "@/shared/Footer/page";
import Header from "@/shared/Header/page";
import Hero from "@/shared/Hero/page";
import TechnologySponsor from "@/shared/TechnologySponsor/page";
import TrustedBy from "@/shared/TrustedBy/page";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Events />
      <TechnologySponsor />
      <TrustedBy />
      <Footer />
    </>
  );
}
