const contractAddress = "0x4b166f0a11a7aE8e8EF520599D3F5f497DC786c3";

const baseScanUrl =
  "https://sepolia.basescan.org/address/0x4b166f0a11a7aE8e8EF520599D3F5f497DC786c3";

export default function ContractStatus() {
  return (
    <section
      id="status"
      className="border-b border-slate-800 bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">

        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
            Project Status
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white">
            Transparent development.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            KOVL is currently deployed on Base Sepolia for development and
            testing. No Kovelyx contract has been deployed to Base Mainnet.
          </p>
        </div>

        {/* Status overview */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <StatusCard
            label="Development Network"
            value="Base Sepolia"
            detail="Chain ID 84532"
          />

          <StatusCard
            label="Token Standard"
            value="ERC-20"
            detail="Standard fungible token"
          />

          <StatusCard
            label="Token Symbol"
            value="KOVL"
            detail="Kovelyx"
          />

          <StatusCard
            label="Fixed Supply"
            value="1,000,000,000"
            detail="KOVL"
          />

          <StatusCard
            label="Decimals"
            value="18"
            detail="ERC-20 standard precision"
          />

          <StatusCard
            label="Mainnet"
            value="Not deployed"
            detail="No production contract"
          />
        </div>

        {/* Contract verification */}
        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-semibold text-white">
                  Base Sepolia contract
                </h3>

                <span className="rounded-full border border-emerald-900 bg-emerald-950/40 px-3 py-1 text-xs font-medium text-emerald-300">
                  Verified
                </span>

                <span className="rounded-full border border-blue-900 bg-blue-950/40 px-3 py-1 text-xs font-medium text-blue-300">
                  Test deployment
                </span>
              </div>

              <p className="mt-4 text-sm text-slate-500">
                Contract address
              </p>

              <p className="mt-2 break-all font-mono text-sm leading-6 text-slate-300">
                {contractAddress}
              </p>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400">
                The KOVL test contract has been deployed and source-verified on
                Base Sepolia. It is provided for development and testing and is
                not the Kovelyx Mainnet contract.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href={baseScanUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
              >
                View on BaseScan
              </a>
            </div>
          </div>
        </div>

        {/* Mainnet warning */}
        <div className="mt-6 rounded-xl border border-slate-800 px-5 py-4">
          <div className="flex items-start gap-3">
            <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-slate-500" />

            <div>
              <p className="font-medium text-slate-200">
                Base Mainnet deployment
              </p>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                Planned. A production contract address will only be published
                after deployment and validation are complete.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function StatusCard({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
      <p className="text-sm text-slate-500">{label}</p>

      <p className="mt-3 text-2xl font-semibold text-white">
        {value}
      </p>

      <p className="mt-1 text-sm text-slate-400">{detail}</p>
    </div>
  );
}