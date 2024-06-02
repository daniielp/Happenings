"use client";
import {
  Clock,
  Lock,
  MapPin,
  MessageCircleQuestion,
  Pin,
  User,
  Users,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { Separator } from "~/components/ui/separator"
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { yourEvents } from "~/data/events";
import { toast } from "sonner";

export default function EventPage({ params }: { params: { slug: string } }) {
  const event = yourEvents[1];

  function addToClipboard() {
    navigator.clipboard.writeText("https://happenings.dk/event/" + params.slug);
    toast("Link kopieret")
  }

  return (
    <>
      <Image
        width={950}
        height={400}
        className="w-full max-h-96 bg-gray-100 object-cover"
        alt="Studiestartsfest - Erhversakademi aarhus"
        src={event.image_url}
      />
      <section className="md:flex md:items-center md:justify-between md:space-x-5">
        <div className="flex items-center space-x-5">
          <div>
            <h2 className="text-base text-gray-900">
              Fre. 9 august kl. 16:00 - 23:00
            </h2>
            <h1 className="text-2xl font-bold text-gray-900">{event.name}</h1>
            <p className="text-sm font-medium text-gray-500 inline-flex items-center gap-2">
              <MapPin />
              <address className="text-sm">
                Ringvej syd 104, 8260 Viby J
              </address>
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-3 sm:space-y-0 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
          <Button variant="outline">Interesseret</Button>
          <Button>Deltager</Button>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-6 lg:grid-flow-col-dense lg:grid-cols-3">
        {/* Description list*/}
        <Card className="space-y-6 lg:col-span-2 lg:col-start-1">
          <CardHeader>
            <CardTitle>Info</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <p className="inline-flex gap-2 items-center text-base">
                <Users className="text-gray-600" /> 73 har svaret
              </p>
              <p className="inline-flex gap-2 items-center text-base">
                <MapPin className="text-gray-600" /> Ringvej syd 104, 8260 Viby
                J
              </p>
              <p className="inline-flex gap-2 items-center text-base">
                <Clock className="text-gray-600" /> 16:00 - 23:00 (7 timer)
              </p>
              <p className="inline-flex gap-2 items-center text-base">
                <User className="text-gray-600" /> Arrangeret af
                <span>Erhversakademi Aarhus Festudvalg</span>
              </p>
              <p className="inline-flex gap-2 items-center text-base">
                <Lock className="text-gray-600" /> Alle kan deltage
              </p>
              <p className="text-base">
                Vi er begejstrede for at byde jer velkommen til en spændende ny
                begyndelse på Erhvervsakademi Aarhus! For at sikre, at I får den
                bedst mulige start på jeres studietid, inviterer vi jer til
                vores årlige studiestartsevent. Dette er en fantastisk mulighed
                for at møde jeres medstuderende, undervisere og det personale,
                der vil støtte jer gennem hele jeres uddannelse.
              </p>
            </div>
          </CardContent>
        </Card>
        <aside className="flex flex-col gap-4 lg:col-span-1 lg:col-start-3">
          <Card className="lg:col-span-1 lg:col-start-3">
            <CardHeader>
              <CardTitle>Kort</CardTitle>
            </CardHeader>
            <CardContent>
              <iframe
                className="w-full h-full rounded-sm"
                src="https://www.google.com/maps/embed/v1/place?q=ringvej+syd+104&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              ></iframe>
            </CardContent>
            <CardFooter>
              <MapPin /> <address>Ringvej syd 104, 8260 Viby J</address>
            </CardFooter>
          </Card>
          <Card className="lg:col-span-1 lg:col-start-3">
            <CardHeader>
              <CardTitle>Gæsteliste</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 justify-evenly mb-4">
                <Button className="w-full" variant="ghost">37 deltager</Button>
                <Button className="w-full" variant="ghost">36 interesseret</Button>
              </div>
              <Separator />
              <Button onClick={addToClipboard} className="w-full mt-4">Inviter</Button>
            </CardContent>
          </Card>
        </aside>
      </div>
    </>
  );
}
