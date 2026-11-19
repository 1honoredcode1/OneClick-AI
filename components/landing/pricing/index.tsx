import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">
        Fair and transparent pricing
      </h2>
      <p className="text-zinc-500 font-light mb-16">
        Start free and upgrade as you grow. No hidden fees or surprises.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div
          className="p-8 rounded-3xl border border-white/5 bg-zinc-900/20 flex flex-col
        items-start text-left hover:bg-zinc-900/40 transition-colors"
        >
          <div className="text-sm font-medium text-zinc-400 mb-2">Starter</div>
          <div className="text-4xl font-medium text-white tracking-tight mb-6">
            $0 <span className="text-lg text-zinc-600 font-light">/mo</span>
          </div>
          <ul className="flex flex-col gap-2 mb-6">
            <li className="text-zinc-400 text-sm font-light">
              <Check className="w-4 h-4 text-zinc-600 mr-2 inline" />
              Up to 100 conversations per month
            </li>
            <li className="text-zinc-400 text-sm font-light">
              <Check className="w-4 h-4 text-zinc-600 mr-2 inline" />
              Basic support
            </li>
            <li className="text-zinc-400 text-sm font-light">
              <Check className="w-4 h-4 text-zinc-600 mr-2 inline" />
              Community access
            </li>
          </ul>
          <button
            className="w-full py-3 rounded-xl border border-white/10 text-white hover:bg-white/5 transition-colors
          text-sm font-medium mt-auto"
          >
            Start Free
          </button>
        </div>
        <div
          className="p-8 rounded-3xl border border-white/5 bg-white/3 flex flex-col
        items-start text-left hover:bg-zinc-900/40 transition-colors"
        >
          <div className="text-sm font-bold text-sky-600 mb-2">Pro</div>
          <div className="text-4xl font-medium text-white tracking-tight mb-6">
            $10 <span className="text-lg text-zinc-600 font-light">/mo</span>
          </div>
          <ul className="flex flex-col gap-2 mb-6">
            <li className="text-zinc-400 text-sm font-light">
              <Check className="w-4 h-4 text-zinc-600 mr-2 inline" />
              Up to 1000 conversations per month
            </li>
            <li className="text-zinc-400 text-sm font-light">
              <Check className="w-4 h-4 text-zinc-600 mr-2 inline" />
              Special support
            </li>
            <li className="text-zinc-400 text-sm font-light">
              <Check className="w-4 h-4 text-zinc-600 mr-2 inline" />
              Community access
            </li>
            <li className="text-zinc-400 text-sm font-light">
              <Check className="w-4 h-4 text-zinc-600 mr-2 inline" />
              Access to beta features
            </li>
            <li className="text-zinc-400 text-sm font-light">
              <Check className="w-4 h-4 text-zinc-600 mr-2 inline" />
              Priority feature requests
            </li>
          </ul>
          <button
            className="w-full py-3 rounded-xl border bg-white text-black border-white 
            hover:bg-zinc-200 transition-colors text-sm font-medium mt-auto cursor-pointer"
          >
            Start Pro
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
