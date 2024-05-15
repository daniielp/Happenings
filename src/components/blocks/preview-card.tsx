"use client";
import {
  ChevronDownIcon,
  CircleHelp,
  CircleIcon,
  Dot,
  StarIcon,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Separator } from "~/components/ui/separator";

const eventOptions = [
  { value: "interested", label: "Måske" },
  { value: "participating", label: "Deltager" },
  { value: "not-participating", label: "Deltager ikke" },
] as const;

type EventOptionValue = (typeof eventOptions)[number]["value"];

interface PreviewCardProps {
  id: number;
  title: string;
  href: string;
  imageUrl: string;
  date: string;
  datetime: string;
  author: {
    name: string;
    imageUrl: string;
  };
}

export function PreviewCard({
  title,
  href,
  imageUrl,
  date,
  datetime,
  author,
}: PreviewCardProps) {
  const [status, setStatus] = useState<EventOptionValue>("interested");
  const [highlighted, setHighlighted] = useState(false);

  return (
    <Card>
      <div className="relative">
        <Image
          src={imageUrl}
          alt={title}
          width={300}
          height={200}
          className="aspect-[16/9] w-full rounded-t-lg bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[16/9]"
        />
        <Link href={href} className="absolute inset-0">
            <span className="sr-only">Se detaljer for {title}</span>
        </Link>
      </div>
      <CardHeader className="flex items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Users className="mr-1 h-3 w-3" />
            20 deltager
          </div>
          <Dot />
          <div>{date}</div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-center space-x-1 rounded-md bg-secondary text-secondary-foreground">
          <Button onClick={() => setHighlighted(prevState => !prevState)} variant={highlighted ? "default" : "secondary"} className="px-3 shadow-none w-full">
            {/* <CircleHelp className="mr-2 h-4 w-4" /> */}
            {eventOptions.find((option) => option.value === status)?.label}
          </Button>
          <Separator orientation="vertical" className="h-[20px]" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" className="px-2 shadow-none">
                <ChevronDownIcon className="h-4 w-4 text-secondary-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              alignOffset={-5}
              className="w-[200px]"
              forceMount
            >
              {eventOptions.map((option, index) => (
                <DropdownMenuCheckboxItem
                  onClick={() => {
                    setHighlighted(true)
                    setStatus(option.value)
                }}
                  key={option.value}
                  checked={option.value === status}
                >
                  {option.label}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardFooter>
    </Card>
  );
}
