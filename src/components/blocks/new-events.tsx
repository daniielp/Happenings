import Image from "next/image";
import React from "react";
import { PreviewCard } from "~/components/blocks/preview-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

const events = [
  {
    id: 1,
    title: "Kapsejlads 2024",
    href: "#",
    imageUrl: "/events/event3.jpg",
    date: "Maj 3, 2024",
    datetime: "2024-05-3",
    author: {
      name: "Kapsejladsen",
      imageUrl: "/organizations/kapsejlads.jpg",
    },
  },
  {
    id: 1,
    title: "End of semester party",
    href: "#",
    imageUrl: "/events/event1.jpg",
    date: "Maj 25, 2024",
    datetime: "2024-05-25",
    author: {
      name: "Erhversakademi Aarhus",
      imageUrl: "/organizations/erhversakademi-aarhus.png",
    },
  },
  {
    id: 1,
    title: "Fed Fredag - Rasmus Seebach",
    href: "#",
    imageUrl: "/events/event4.jpg",
    date: "Juni 14, 2024",
    datetime: "2024-06-14",
    author: {
      name: "Tivoli Friheden",
      imageUrl: "/organizations/friheden.png",
    },
  },
];

export function NewEvents() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Opdag begivenheder</CardTitle>
        <CardDescription>
          Her kan du se en liste over relevante begivenheder for dig
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {events.map((event) => (
            <PreviewCard key={event.id} {...event} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
