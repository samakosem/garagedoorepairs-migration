import Link from "next/link";

type Row = {
  problem: string;
  cause: string;
  service: string;
  servicePath: string;
  urgency: "Emergency" | "Same-Week" | "Routine";
};

const rows: Row[] = [
  {
    problem: "Door won't open or close",
    cause: "Broken spring, opener failure, or track obstruction",
    service: "Garage Door Repair",
    servicePath: "/garage-door-repair/",
    urgency: "Emergency",
  },
  {
    problem: "Loud bang, then door won't move",
    cause: "Snapped torsion or extension spring",
    service: "Spring Replacement",
    servicePath: "/garage-door-spring-replacement/",
    urgency: "Emergency",
  },
  {
    problem: "Door is crooked or stuck partway",
    cause: "Door off its track",
    service: "Off Track Repair",
    servicePath: "/garage-door-off-track-repair/",
    urgency: "Emergency",
  },
  {
    problem: "Remote or keypad not responding",
    cause: "Opener motor, circuit board, or programming issue",
    service: "Opener Repair",
    servicePath: "/garage-door-opener/",
    urgency: "Same-Week",
  },
  {
    problem: "Door is noisy or vibrates",
    cause: "Worn rollers or bent track",
    service: "Track and Roller Replacement",
    servicePath: "/track-and-roller-replacement/",
    urgency: "Same-Week",
  },
  {
    problem: "Door has rust, rot, or frequent breakdowns",
    cause: "Door has reached end of useful life",
    service: "Garage Door Replacement",
    servicePath: "/garage-door-replacement/",
    urgency: "Routine",
  },
  {
    problem: "No recent inspection or service",
    cause: "Normal wear without preventive care",
    service: "Preventive Maintenance",
    servicePath: "/preventive-maintenance/",
    urgency: "Routine",
  },
];

const urgencyColor: Record<Row["urgency"], string> = {
  Emergency: "bg-orange-100 text-orange-700",
  "Same-Week": "bg-blue-100 text-brand-blue",
  Routine: "bg-zinc-100 text-zinc-700",
};

export default function ServiceComparisonTable() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-zinc-900">What Service Do You Need?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-zinc-600">
          A quick guide to common garage door problems and the service that addresses them.
        </p>
      </div>
      <div className="mt-8 overflow-x-auto rounded-xl border border-zinc-200 shadow-sm">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-brand-navy text-white">
            <tr>
              <th className="px-4 py-3 font-semibold">Problem</th>
              <th className="px-4 py-3 font-semibold">Likely Cause</th>
              <th className="px-4 py-3 font-semibold">Recommended Service</th>
              <th className="px-4 py-3 font-semibold">Urgency</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 bg-white">
            {rows.map((row, index) => (
              <tr key={row.problem} className={index % 2 === 1 ? "bg-brand-surface" : undefined}>
                <td className="px-4 py-3 text-zinc-800">{row.problem}</td>
                <td className="px-4 py-3 text-zinc-600">{row.cause}</td>
                <td className="px-4 py-3">
                  <Link href={row.servicePath} className="font-medium text-brand-blue underline">
                    {row.service}
                  </Link>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${urgencyColor[row.urgency]}`}
                  >
                    {row.urgency}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
