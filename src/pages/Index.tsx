
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Learning from "@/components/sections/Learning";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Testimonials />
      <CTA />
      <Learning />
    </div>
  );
};

export default Index;
