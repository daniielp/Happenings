import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";

const team = [
  {
    name: "Rasmus Jensing",
    role: "CEO",
    image_url: "/team/rasmus.jpg",
  },
  {
    name: "Daniel Pedersen",
    role: "Udvikler",
    image_url: "/team/daniel.jpg",
  },
  {
    name: "Markus Sørensen",
    role: "Event ansvarlig",
    image_url: "/profile/markus.jpg",
  },
];

export const metadata: Metadata = {
    title: "404 - Happenings",
    description: "Vær en del af fællesskabet",
  };

export default function NotFound() {
  return (
    <section className="w-full h-full flex items-center justify-center">
      <div
        className="flex flex-1 items-center justify-center"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-4xl font-bold tracking-tight">404</h1>
          <p className="text-sm text-slate-700 max-w-[700px]">
            Åh nej! Det ser ud til, at vi har mistet stien til dit ønskede
            event. Som straf for vores udfordring vil vi sende en fra vores team
            på gulvet til en dans-off, kan du hjælpe os med at vælge personen?
          </p>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center justify-center"
              >
                <Image
                  src={member.image_url}
                  alt={member.name}
                  className="rounded-full"
                  width={200}
                  height={200}
                />
                <div className="my-2">
                  <p className="text-lg text-center font-semibold">
                    {member.name}
                  </p>
                  <p className="text-sm text-center text-slate-700">
                    {member.role}
                  </p>
                </div>

                <Button variant="outline" className="w-full">
                  Vælg
                </Button>
              </div>
            ))}
          </div>

          <Button asChild className="mt-16 w-96">
            <Link href="/">Se events</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
