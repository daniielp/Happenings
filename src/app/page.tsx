import type { Metadata } from "next";
import { EventCard } from "~/components/blocks/event-card";

export const metadata: Metadata = {
  title: "Happenings - App",
  description: "Vær en del af fællesskabet",
};
export default function Home() {
  return (
    <div>
      <EventCard />
    </div>
  );
}
