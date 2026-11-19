import { BookOpen, MessageCircleHeart, ShieldCheck } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-32 px-6 max-w-6xl mx-auto">
      <div className="mb-20">
        <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">
          Created for creativity
        </h2>
        <p className="text-xl text-zinc-500 font-light max-w-xl leading-relaxed">
          Our platform is designed to empower creators, providing them with the
          tools and resources they need to bring their ideas to life.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          className="group p-8 rounded-3xl border border-white/5 bg-linear-to b from-white/3 to-transparent
        hover:bg-white/10 transition-colors"
        >
          <div
            className="w-12 h-12 rounded-2xl bg-[#0a0a0e] border border-white/10 flex items-center
            justify-center mb-6 group-hover:scale-105 transition-transform"
          >
            <BookOpen className="w-6 h-6 text-zinc-300" />
          </div>
          <h3 className="text-lg font-medium text-white mb-3">
            Knowledge Base
          </h3>
          <p className="text-sm text-zinc-400 font-light leading-relaxed">
            Access a comprehensive library of resources, guides, and tutorials
            to help you master your craft and stay ahead in your field.
          </p>
        </div>
        <div
          className="group p-8 rounded-3xl border border-white/5 bg-linear-to b from-white/3 to-transparent
        hover:bg-white/10 transition-colors"
        >
          <div
            className="w-12 h-12 rounded-2xl bg-[#0a0a0e] border border-white/10 flex items-center
            justify-center mb-6 group-hover:scale-105 transition-transform"
          >
            <ShieldCheck className="w-6 h-6 text-zinc-300" />
          </div>
          <h3 className="text-lg font-medium text-white mb-3">
            Strict Guardrails
          </h3>
          <p className="text-sm text-zinc-400 font-light leading-relaxed">
            Our platform is built with strict guardrails to ensure a safe and
            secure environment for all users, protecting your data and privacy
            at all times.
          </p>
        </div>
        <div
          className="group p-8 rounded-3xl border border-white/5 bg-linear-to b from-white/3 to-transparent
        hover:bg-white/10 transition-colors"
        >
          <div
            className="w-12 h-12 rounded-2xl bg-[#0a0a0e] border border-white/10 flex items-center
            justify-center mb-6 group-hover:scale-105 transition-transform"
          >
            <MessageCircleHeart className="w-6 h-6 text-zinc-300" />
          </div>
          <h3 className="text-lg font-medium text-white mb-3">Tone Matching</h3>
          <p className="text-sm text-zinc-400 font-light leading-relaxed">
            Our tone matching feature ensures that your content resonates with
            your audience, helping you communicate your message effectively and
            authentically.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
