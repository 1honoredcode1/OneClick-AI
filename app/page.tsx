import Hero from "@/components/landing/hero";
import NavBar from "@/components/landing/nav";
import SocialProof from "@/components/landing/social";

const page = () => {
  return (
    <main className="w-full flex flex-col relative z-10">
      <NavBar />
      <Hero />
      <SocialProof />
    </main>
  );
};

export default page;
