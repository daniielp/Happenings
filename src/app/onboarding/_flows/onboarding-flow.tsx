"use client";
import React, { Suspense, useEffect } from "react";
import { SignUp } from "../_steps/sign-up";
import { redirect, useSearchParams } from "next/navigation";
import { ConnectSchool } from "~/app/onboarding/_steps/connect-school";
import { UploadProfile } from "~/app/onboarding/_steps/upload-profile";
import { UserPreferences } from "~/app/onboarding/_steps/user-preferences";
import { CreatePin } from "~/app/onboarding/_steps/create-pin";
import { Skeleton } from "~/components/ui/skeleton";

export function OnboardingFlow() {
  const searchParams = useSearchParams();
  const step = searchParams.get("step");

  function renderStep() {
    switch (step) {
      case "4":
        return <CreatePin />;
      case "3":
        return <UserPreferences />;
      case "2":
        return <UploadProfile />;
      default:
        return <ConnectSchool />;
    }
  }

  return (
    <div className="bg-white p-4 rounded-lg">
      <Suspense fallback={<Skeleton className="h-full" />}>{renderStep()}</Suspense>
    </div>
  );
}
