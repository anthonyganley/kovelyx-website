export default function Hero() {
  return (
    <section
      id="about"
      className="border-b border-slate-800 bg-slate-950"
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12 lg:px-8 lg:py-18">

        {/* Left side */}
        <div>
          <div className="inline-flex rounded-full border border-blue-900 bg-blue-950/40 px-4 py-2 text-sm text-blue-300">
            Base Sepolia Testnet
          </div>

          <h1 className="mt-7 text-6xl font-bold tracking-tight text-white sm:text-7xl">
            Kovelyx
          </h1>

          <p className="mt-5 text-2xl leading-9 text-slate-200">
            A fixed-supply digital token designed for the Base blockchain.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
            KOVL has a fixed supply of 1,000,000,000 tokens, with no additional
            minting, transfer tax, blacklist, pause function, or administrative
            token controls.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href="#kovl"
              className="rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white transition hover:bg-blue-500"
            >
              Explore KOVL
            </a>

            <a
              href="#status"
              className="rounded-lg border border-slate-700 px-6 py-3 text-base font-medium text-white transition hover:border-slate-500"
            >
              Project Status
            </a>
          </div>

          <div className="mt-8 border-t border-slate-800 pt-5">
            <p className="text-sm text-slate-500">
              Mainnet contract: Not deployed
            </p>
          </div>
        </div>

        {/* Right side - Kovelyx artwork */}
        <div className="mt-8 flex justify-center lg:mt-0 lg:justify-end">
          <img
            src="/images/kovelyx-hero.png"
            alt="Kovelyx KOVL coin artwork"
            className="w-full max-w-xl rounded-2xl object-cover shadow-2xl shadow-blue-950/20 lg:max-w-3xl"
          />
        </div>

      </div>
    </section>
  );
}