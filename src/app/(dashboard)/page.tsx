import type { Metadata } from "next";
import { CreateEvent } from "~/components/blocks/create-event";
import { EventCard } from "~/components/blocks/event-card";
import { NewEvents } from "~/components/blocks/new-events";

export const metadata: Metadata = {
  title: "Happenings - App",
  description: "Vær en del af fællesskabet",
};
export default function Home() {
  return (
    <>
      <EventCard />
      <CreateEvent />
      <NewEvents />
    </>
  );
}
