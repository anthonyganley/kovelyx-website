export default function Roadmap() {
  return (
    <section id="roadmap" className="border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
          Roadmap
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Current project status.
        </h2>

        <p className="mt-4 max-w-2xl text-slate-400">
          Kovelyx is being developed in stages. Testnet validation comes before
          any production deployment to Base Mainnet.
        </p>

        <div className="mt-12 max-w-4xl">
          <div className="border-l border-slate-800 pl-8">
            {/* Complete */}
            <div className="relative pb-10">
              <span className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                ✓
              </span>

              <p className="text-sm font-medium text-blue-400">Complete</p>

              <h3 className="mt-1 text-lg font-semibold">
                ERC-20 contract created
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                The KOVL fixed-supply ERC-20 contract has been created and
                compiled successfully.
              </p>
            </div>

            {/* Complete */}
            <div className="relative pb-10">
              <span className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                ✓
              </span>

              <p className="text-sm font-medium text-blue-400">Complete</p>

              <h3 className="mt-1 text-lg font-semibold">
                Base Sepolia deployment
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                KOVL has been deployed successfully to the Base Sepolia
                testnet.
              </p>
            </div>

            {/* Complete */}
            <div className="relative pb-10">
              <span className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                ✓
              </span>

              <p className="text-sm font-medium text-blue-400">Complete</p>

              <h3 className="mt-1 text-lg font-semibold">
                Token transfers tested
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Test KOVL transfers between MetaMask wallets have been
                completed successfully.
              </p>
            </div>

            {/* Complete */}
            <div className="relative pb-10">
              <span className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                ✓
              </span>

              <p className="text-sm font-medium text-blue-400">Complete</p>

              <h3 className="mt-1 text-lg font-semibold">
                Contract source verified
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                The Base Sepolia deployment source has been verified through
                the public block explorer.
              </p>
            </div>

            {/* In Progress */}
            <div className="relative pb-10">
              <span className="absolute -left-[41px] h-5 w-5 rounded-full border-4 border-blue-500 bg-slate-950" />

              <p className="text-sm font-medium text-blue-300">
                In progress
              </p>

              <h3 className="mt-1 text-lg font-semibold">
                Kovelyx public website
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Building the public Kovelyx website, project documentation,
                contract information, and deployment status pages.
              </p>
            </div>

            {/* Planned */}
            <div className="relative pb-10">
              <span className="absolute -left-[41px] h-5 w-5 rounded-full border-2 border-slate-600 bg-slate-950" />

              <p className="text-sm font-medium text-slate-500">Planned</p>

              <h3 className="mt-1 text-lg font-semibold text-slate-300">
                Production security setup
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Complete the production wallet and deployment security process
                before any mainnet token deployment.
              </p>
            </div>

            {/* Planned */}
            <div className="relative">
              <span className="absolute -left-[41px] h-5 w-5 rounded-full border-2 border-slate-600 bg-slate-950" />

              <p className="text-sm font-medium text-slate-500">Planned</p>

              <h3 className="mt-1 text-lg font-semibold text-slate-300">
                Base Mainnet deployment
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                KOVL has not been deployed to Base Mainnet. A production
                contract address will only be published after deployment is
                complete and validated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}