import { EllipsisVerticalIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { EventSelect } from "~/components/blocks/event-select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { cn } from "~/lib/utils";

const events = [
  {
    name: "Fredagsbar",
    initials: "GA",
    href: "#",
    members: 16,
    bgColor: "bg-pink-600",
  },
  {
    name: "Studiestartsfest",
    initials: "CD",
    href: "#",
    members: 12,
    bgColor: "bg-purple-600",
  },
];

export function EventCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dine begivenheder</CardTitle>
        <CardDescription>
          Her kan du se en liste over dine kommende begivenheder
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6">
          {events.map((event) => (
            <li
              key={event.name}
              className="col-span-1 flex rounded-md shadow-sm group group-hover:bg-gray-100"
            >
              <div
                className={cn(
                  event.bgColor,
                  "flex w-64 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white"
                )}
              >
                {event.initials}
              </div>
              <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                <div className="flex-1 truncate px-4 py-2">
                  <Link
                    href={event.href}
                    className="font-semibold text-gray-900 hover:text-gray-600 text-2xl"
                  >
                    {event.name}
                  </Link>
                  <p className="text-gray-500 text-base">{event.members} Deltager</p>
                </div>
                <div className="flex-shrink-0 pr-2">
                  <EventSelect />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
