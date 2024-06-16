import Link from "next/link";
import React, { Suspense } from "react";
import Image from "next/image";
import { CircleCheckBig } from "lucide-react";
import { OnboardingFlow } from "./_flows/onboarding-flow";
import { Skeleton } from "~/components/ui/skeleton";

export default function OnboardingPage() {
  return (
    <main className="p-4">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:grid-cols-2 direction-reverse">
        <Suspense fallback={<Skeleton className="h-full" />}>
          <OnboardingFlow />
        </Suspense>
        <section className="flex flex-col text-gray-600 gap-8 md:order-first">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Image
              src="/logo_color.svg"
              alt="The Happenings Logo"
              loading="lazy"
              width="32"
              height="32"
              decoding="async"
              className="h-8"
            />
            <span className="text-slate-900 text-xl">Happenings</span>
          </Link>
          <ul role="list" className="mt-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CircleCheckBig
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Kun verificerede brugere:
                </strong>{" "}
                Ingen falske profiler, pseudonymer, bots eller falske
                identiteter.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CircleCheckBig
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Omfattende privatlivskontrol:
                </strong>{" "}
                Du ejer dine data og vælger selv, hvad andre kan se.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CircleCheckBig
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Fokus på fællesskabet:
                </strong>{" "}
                Vi opfordrer til fysiske møder og interaktioner i stedet for at
                sidde foran skærmen og blive udsat for afhængighed, falske
                nyheder eller negativ scrolling.
              </span>
            </li>
          </ul>
          <Link
            href="#"
            className="rounded-lg border-2 border-dashed border-gray-300 p-4 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Vidste du godt at med happenings kan du både{" "}
            <span className="text-emerald-600 font-bold">modtage penge</span>{" "}
            for billetter, men også{" "}
            <span className="text-emerald-600 font-bold">
              oprette nye begivenheder
            </span>{" "}
            og få det vist for andre brugere?
          </Link>
        </section>
      </div>
    </main>
  );
}
