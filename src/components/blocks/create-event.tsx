"use client";
import React, { useState } from "react";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import type { ButtonProps } from "~/components/ui/button";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "~/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { useZodForm } from "~/hooks/use-zod-form";
import { cn } from "~/lib/utils";
import { CalendarIcon, Lock } from "lucide-react";
import { Calendar } from "~/components/ui/calendar";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPTimeSeparator,
} from "~/components/ui/input-otp";
import { toast } from "sonner";
import { Textarea } from "~/components/ui/textarea";

const OTP_LENGTH = 4;

const CreateEventSchema = z.object({
  organizator_id: z.string({ required_error: "Nødvendig" }).min(3),
  event_title: z.string({ required_error: "Nødvendig" }).min(3).max(120),
  start_date: z.date({ required_error: "Nødvendig" }),
  start_time: z.string({ required_error: "Nødvendig" }).min(OTP_LENGTH),
  visibility: z.enum(["private", "public", "friends", "organization"]),
  end_date: z.date({ required_error: "Nødvendig" }).optional(),
  description: z.string({ required_error: "Nødvendig" }).optional(),
});

interface CreateEventProps extends ButtonProps {}

export function CreateEvent({ ...props }: CreateEventProps) {
  const [open, setOpen] = useState(false);
  const form = useZodForm({
    schema: CreateEventSchema,
  });

  function onSubmit(data: z.infer<typeof CreateEventSchema>) {
    toast("Vi har oprettet din begivenhed");

    form.reset({
      description: "",
      end_date: undefined,
      event_title: "",
      organizator_id: "",
      start_date: undefined,
      start_time: "",
      visibility: undefined,
    });

    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button {...props} className="w-full">Opret begivenhed</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Opret begivenhed</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              name="organizator_id"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Organisator</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Vælg en profil" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Privat Profil</SelectLabel>
                        <SelectItem value="markus-soerensen">
                          Markus Sørensen
                        </SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Organization</SelectLabel>
                        <SelectItem value="erhversakademi-aarhus">
                          Erhversakademi Aarhus
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Vælg hvem der organiserer eventet.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="event_title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Begivenhedens navn</FormLabel>
                  <FormControl>
                    <Input placeholder="Begivenhedens navn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-4 items-end">
              <FormField
                control={form.control}
                name="start_date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Startdato</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Vælg en dato</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="start_time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Start tidspunkt</FormLabel>
                    <FormControl>
                      <InputOTP maxLength={OTP_LENGTH} {...field}>
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                        </InputOTPGroup>
                        <InputOTPTimeSeparator />
                        <InputOTPGroup>
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              name="visibility"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Synlighed</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Vælg en profil" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="private">Privat</SelectItem>
                      <SelectItem value="public">Offentligt</SelectItem>
                      <SelectItem value="friends">Venner</SelectItem>
                      <SelectGroup>
                        <SelectLabel>Orginizationer</SelectLabel>
                        <SelectItem value="organization">
                          Studerende på Erhversakademi Aarhus
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormDescription>Hvem kan se begivenheden.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Beskrivelse</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Hvilke oplysninger er der?"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Opret begivenhed
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
