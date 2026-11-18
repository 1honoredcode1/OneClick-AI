import Hero from "@/components/landing/hero";
import NavBar from "@/components/landing/nav";

const page = () => {
  return (
    <main className="w-full flex flex-col relative z-10">
      <NavBar />
      <Hero />
    </main>
  );
};

export default page;
