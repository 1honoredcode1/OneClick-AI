const SocialProof = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-black/20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-xs font-medium text-zinc-600 uppercase tracking-widest mb-8">
          Trusted by over 100,000+ users worldwide
        </p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale">
          <span className="text-lg font-bold tracking-tight text-white">
            OpenAI
          </span>
          <span className="text-lg font-bold tracking-tight text-white">
            Google
          </span>
          <span className="text-lg font-bold tracking-tight text-white">
            Nvidia
          </span>
          <span className="text-lg font-semibold tracking-tight text-white italic font-serif flex gap-1 items-center">
            <div className="w-4 h-4 bg-white rounded"></div>
            Microsoft
          </span>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
