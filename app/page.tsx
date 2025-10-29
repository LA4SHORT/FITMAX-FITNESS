import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Programs from "@/components/Programs";
import Testimonials from "@/components/Testimonials";
import Navbar from "@/components/ui/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return <main className="min-h-screen">
    <Navbar />
    <Hero />
    <Programs />
    <WhyChooseUs />
    <Testimonials />
    <Pricing />
    <Footer />
  </main>;
}
