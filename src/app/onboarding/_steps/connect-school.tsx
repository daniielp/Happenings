"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Separator } from "~/components/ui/separator";

const schools = [
  {
    value: "aarhus-universitet",
    label: "Aarhus Universitet",
    programs: [
      "Kandidat i Business Administration",
      "Bachelor i Medicin",
      "Kandidat i Datalogi",
      "Bachelor i Statskundskab",
      "Bachelor i Psykologi",
    ],
  },
  {
    value: "via-university-college",
    label: "VIA University College",
    programs: [
      "Pædagoguddannelsen",
      "Sygeplejerskeuddannelsen",
      "Bygningskonstruktør",
      "Ingeniøruddannelsen",
      "Læreruddannelsen",
    ],
  },
  {
    value: "erhvervsakademi-aarhus",
    label: "Erhvervsakademi Aarhus",
    programs: [
      "Markedsføringsøkonom",
      "Multimediedesigner",
      "Byggetekniker",
      "Finansøkonom",
      "Datamatiker",
    ],
  },
  {
    value: "aarhus-tekniske-skole",
    label: "Aarhus Tech",
    programs: [
      "Elektrikeruddannelsen",
      "Mureruddannelsen",
      "Automekanikeruddannelsen",
      "Data- og kommunikationstekniker",
      "Tømreruddannelsen",
    ],
  },
  {
    value: "jysk-musikkonservatorium",
    label: "Det Jyske Musikkonservatorium",
    programs: [
      "Bachelor i Musik",
      "Kandidat i Musikpædagogik",
      "Rytmisk Musik og Bevægelse",
      "Klassisk Musik",
      "Komposition",
    ],
  },
  {
    value: "danmarks-medie-og-journalisthøjskole",
    label: "Danmarks Medie- og Journalisthøjskole",
    programs: [
      "Journalistik",
      "Medieproduktion og Ledelse",
      "TV- og Medietilrettelæggelse",
      "Grafisk Kommunikation",
      "Interaktive Digitale Medier",
    ],
  },
  {
    value: "social-og-sundhedsskolen-aarhus",
    label: "Social- og Sundhedsskolen Aarhus",
    programs: [
      "Social- og sundhedsassistentuddannelsen",
      "Social- og sundhedshjælperuddannelsen",
      "Pædagogisk Assistentuddannelse",
      "EUX Velfærd",
    ],
  },
  {
    value: "kaospilot",
    label: "Kaospilot",
    programs: [
      "Enterprising Leadership",
      "Creative Leadership",
      "Project Management",
      "Business Design",
    ],
  },
  {
    value: "aarhus-arkitektskole",
    label: "Arkitektskolen Aarhus",
    programs: [
      "Bachelor i Arkitektur",
      "Kandidat i Arkitektur",
      "Urban Design",
      "Landscape Architecture",
      "Sustainable Architecture",
    ],
  },
  {
    value: "aarhus-bss",
    label:
      "Aarhus BSS (Aarhus University, School of Business and Social Sciences)",
    programs: [
      "Bachelor i Erhvervsøkonomi (BSc)",
      "Kandidat i Erhvervsøkonomi (MSc)",
      "Bachelor i Jura",
      "Kandidat i Statskundskab",
      "Bachelor i Økonomi",
    ],
  },
];

export function ConnectSchool() {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);

  function updateStep() {
    router.push(`${pathname}?step=2`);
  }

  return (
    <div className="flex h-full flex-col justify-center lg:flex-none">
      <div className="mx-auto flex flex-col flex-1 justify-evenly w-full max-w-sm lg:w-96">
        <div className="mb-8">
          <h2 className="text-center mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Forbind studie
          </h2>
          <p className="font-medium leading-6 text-sm text-center mt-4 text-gray-600">
            Lad os få dig koblet op på dit studie
          </p>
        </div>
        <Separator />
        <div className="my-8 flex flex-col gap-4">
          <div>
            <Label>Vælg uddannelsesinstitution</Label>
            <Select onValueChange={setSelectedSchool}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Vælg en skole" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Uddannelsesinstitutioner</SelectLabel>
                  {schools.map((school) => (
                    <SelectItem key={school.value} value={school.value}>
                      {school.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {
            // Only show the select if a school is selected
            selectedSchool && (
              <div>
                <Label>Vælg uddannelse</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Vælg en uddannelse" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Uddannelser</SelectLabel>
                      {selectedSchool &&
                        schools
                          .find((school) => school.value === selectedSchool)
                          ?.programs.map((program) => (
                            <SelectItem key={program} value={program}>
                              {program}
                            </SelectItem>
                          ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            )
          }
        </div>
        <Button onClick={updateStep} className="w-full mt-auto">
          Fortsæt
        </Button>
      </div>
    </div>
  );
}
