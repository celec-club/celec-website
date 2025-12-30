import About from "@/components/Home/About/page";
import Events from "@/components/Home/Events/page";
import Footer from "@/components/Home/Footer/page";
import Header from "@/components/Home/Header/page";
import Hero from "@/components/Home/Hero/page";
import TechnologySponsor from "@/components/Home/TechnologySponsor/page";
import TrustedBy from "@/components/Home/TrustedBy/page";

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
