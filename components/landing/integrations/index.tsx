const Integration = () => {
  return (
    <section
      id="how-it-works"
      className="py-24 border-t border-white/5 bg-black/20"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">
            Drop-in integrations
          </h2>
          <p className="text-lg text-zinc-400 font-light mb-8 leading-relaxed">
            No need to worry about complex setups or compatibility issues. Our
            drop-in integrations are designed to work seamlessly with your
            existing tools and workflows, allowing you to get started quickly.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 text-sm text-zinc-300 font-light">
              <div
                className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-700 flex
                items-center justify-center text-[10px] text-zinc-500"
              >
                1
              </div>
              Scan your documentation URL
            </div>
            <div className="w-px h-4 bg-zinc-800 ml-3"></div>
            <div className="flex items-center gap-4 text-sm text-zinc-300 font-light">
              <div
                className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-700 flex
                items-center justify-center text-[10px] text-zinc-500"
              >
                2
              </div>
              Copy the embed code snippet
            </div>
            <div className="w-px h-4 bg-zinc-800 ml-3"></div>
            <div className="flex items-center gap-4 text-sm text-zinc-300 font-light">
              <div
                className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-700 flex
                items-center justify-center text-[10px] text-zinc-500"
              >
                3
              </div>
              Auto-resolve tickets
            </div>
          </div>
        </div>
        <div className="flex-1 w-full max-w-lg">
          <div className="glass-card rounded-xl p-6 relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                <span className="text-xs text-zinc-600 font-mono">
                  index.html
                </span>
              </div>
            </div>
            <div className="font-mono text-xs md:text-sm leading-7 text-zinc-400">
              <div className="text-zinc-600">
                &lt;! -- OneClick Support --&gt;
              </div>
              <div>
                &lt;<span className="text-pink-400">script</span>
              </div>
              <div className="pl-4">
                <span className="text-indigo-400">src</span> &gt;
                <span className="text-emerald-400">
                  &quot;https://oneclicksupport.com/embed.js&quot;
                </span>
              </div>
              <div className="pl-4">
                <span className="text-indigo-400">data-id</span>&gt;
                <span className="text-emerald-400">
                  &quot;b7885803-18cå-4b3e-9c7f-1a2b3c4d5e6f&quot;
                </span>
                <br />
                <span className="text-indigo-400">defer&gt;</span>
              </div>
              <div>
                &lt;/<span className="text-pink-400">script</span>&gt;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
