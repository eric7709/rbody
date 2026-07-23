import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NewServices from "@/components/NewServices";
import Header2 from "@/components/Header2";

export default function Home() {
  return (
    <>
      <Header2 />
      <main className="flex-1">
        <Hero />
        <About />
        <NewServices />
        <Process />
        <Gallery />
        <BeforeAfter />
        <Testimonials />
        <WhyChooseUs />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
