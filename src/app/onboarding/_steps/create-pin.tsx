import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "~/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";

export function CreatePin() {
  const router = useRouter();
  const pathname = usePathname();

  function updateStep() {
    router.push(`/`);
  }

  return (
    <div className="flex h-full flex-col justify-center lg:flex-none">
      <div className="mx-auto flex flex-col flex-1 justify-evenly w-full max-w-sm lg:w-96">
        <div className="mb-8">
          <h2 className="text-center mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Opsæt pinkode
          </h2>
          <p className="font-medium leading-6 text-sm text-center mt-4 text-gray-600">
            Slip for at logge ind med adgangskode ved at oprette en pinkode.
          </p>
        </div>
        <Separator />
        <div className="my-8 flex flex-col gap-8">
          <div className="flex flex-col justify-center items-center gap-4">
            <h2 className="text-center text-slate-900 text-base">
              Opret pinkode
            </h2>
            <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <h2 className="text-center text-base text-slate-900">
              Indtast din pinkode igen
            </h2>
            <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
        </div>
        <Button onClick={updateStep} className="w-full mt-auto">
          Fortsæt
        </Button>
      </div>
    </div>
  );
}
