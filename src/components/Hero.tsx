import { token } from "@/data/token";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-7xl px-6 pb-24 pt-28 lg:px-8 lg:pt-36"
    >
      <div className="max-w-4xl">
        <div className="mb-8 inline-flex items-center rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-300">
          {token.testnet.name} Testnet
        </div>

        <h1 className="text-6xl font-semibold tracking-tight sm:text-7xl lg:text-8xl">
          {token.name}
        </h1>

        <p
          id="about"
          className="mt-6 max-w-2xl text-xl leading-8 text-slate-300 sm:text-2xl"
        >
          A fixed-supply digital token designed for the {token.blockchain} blockchain.
        </p>

        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400">
          {token.symbol} has a fixed supply of {token.supply.display} tokens,
          with no additional minting, transfer tax, blacklist, pause function,
          or administrative token controls.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#token"
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500"
          >
            Explore {token.symbol}
          </a>

          <a
            href="#roadmap"
            className="rounded-lg border border-slate-700 px-6 py-3 font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
          >
            Project Status
          </a>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-sm text-slate-500">
          Mainnet contract:{" "}
          {token.mainnet.deployed ? "Deployed" : "Not deployed"}
        </div>
      </div>
    </section>
  );
}