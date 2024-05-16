import React from "react";
import { PreviewCard } from "~/components/blocks/preview-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { events } from "~/data/events";



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
