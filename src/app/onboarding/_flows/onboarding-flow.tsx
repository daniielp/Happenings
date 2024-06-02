"use client";
import React, { useEffect } from "react";
import { SignUp } from "../_steps/sign-up";
import { useSearchParams } from "next/navigation";
import { ConnectSchool } from "~/app/onboarding/_steps/connect-school";

export function OnboardingFlow() {
  const searchParams = useSearchParams();
  const step = searchParams.get("step");

  function renderStep() {
    switch (step) {
      case "2":
        return <ConnectSchool />;
      default:
        return <SignUp />;
    }
  }

  return (
    <div className="bg-white p-4 rounded-lg">
      {renderStep()}
    </div>
  );
}
