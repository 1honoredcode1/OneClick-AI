import Features from "@/components/landing/features";
import Hero from "@/components/landing/hero";
import Integration from "@/components/landing/integrations";
import NavBar from "@/components/landing/nav";
import Pricing from "@/components/landing/pricing";
import SocialProof from "@/components/landing/social";

const page = () => {
  return (
    <main className="w-full flex flex-col relative z-10">
      <NavBar />
      <Hero />
      <SocialProof />
      <Features />
      <Integration />
      <Pricing />
    </main>
  );
};

export default page;
