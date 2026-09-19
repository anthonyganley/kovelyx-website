const roadmapItems = [
  {
    stage: "01",
    status: "Completed",
    title: "Base Sepolia development",
    description:
      "KOVL has been deployed to Base Sepolia for development, testing and contract verification.",
  },
  {
    stage: "02",
    status: "Completed",
    title: "Website and public documentation",
    description:
      "The Kovelyx website, token design information, development status and testnet contract details are being published publicly.",
  },
  {
    stage: "03",
    status: "In progress",
    title: "Security and treasury setup",
    description:
      "Prepare the production wallet structure, multisig controls and deployment procedures before any Mainnet launch.",
  },
  {
    stage: "04",
    status: "Planned",
    title: "Mainnet readiness",
    description:
      "Complete final contract checks, deployment validation and production readiness checks before publishing a Mainnet contract.",
  },
  {
    stage: "05",
    status: "Planned",
    title: "Base Mainnet deployment",
    description:
      "Deploy the fixed-supply KOVL contract to Base Mainnet only after the production setup has been completed and validated.",
  },
  {
    stage: "06",
    status: "Planned",
    title: "Post-launch transparency",
    description:
      "Publish the production contract address and provide ongoing public information about the Kovelyx token and project status.",
  },
];

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="border-b border-slate-800 bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
            Roadmap
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white">
            Build carefully. Launch deliberately.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Kovelyx is being developed in stages. Mainnet deployment will only
            take place after the technical, security and operational setup has
            been completed and validated.
          </p>
        </div>

        {/* Roadmap */}
        <div className="mt-14 space-y-5">
          {roadmapItems.map((item) => (
            <RoadmapItem key={item.stage} {...item} />
          ))}
        </div>

        {/* Mainnet note */}
        <div className="mt-10 rounded-2xl border border-blue-900/60 bg-blue-950/20 p-6 sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                Mainnet
              </p>

              <h3 className="mt-2 text-xl font-semibold text-white">
                No production contract has been deployed.
              </h3>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">
                Any contract currently referenced on the Kovelyx website is a
                Base Sepolia test deployment. The official Base Mainnet
                contract address will only be published after production
                deployment and validation are complete.
              </p>
            </div>

            <span className="shrink-0 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300">
              Not deployed
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

function RoadmapItem({
  stage,
  status,
  title,
  description,
}: {
  stage: string;
  status: string;
  title: string;
  description: string;
}) {
  const statusClasses =
    status === "Completed"
      ? "border-emerald-900 bg-emerald-950/40 text-emerald-300"
      : status === "In progress"
        ? "border-blue-900 bg-blue-950/40 text-blue-300"
        : "border-slate-700 bg-slate-900 text-slate-400";

  const dotClasses =
    status === "Completed"
      ? "bg-emerald-400"
      : status === "In progress"
        ? "bg-blue-400"
        : "bg-slate-600";

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
      <div className="grid gap-6 sm:grid-cols-[70px_1fr]">

        {/* Stage */}
        <div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-950 text-sm font-semibold text-slate-300">
            {stage}
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-xl font-semibold text-white">
              {title}
            </h3>

            <span
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${statusClasses}`}
            >
              <span className={`h-2 w-2 rounded-full ${dotClasses}`} />
              {status}
            </span>
          </div>

          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-400">
            {description}
          </p>
        </div>

      </div>
    </div>
  );
}