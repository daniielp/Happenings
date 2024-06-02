"use client";
import { GraduationCap } from "lucide-react";
import React from "react";
import { Button } from "../../../components/ui/button";
import { usePathname, useRouter } from "next/navigation";

export function SignUp() {
  const router = useRouter();
  const pathname = usePathname();

  function updateStep() {
    router.push(`${pathname}?step=2`);
  }

  return (
    <div className="flex flex-col justify-center lg:flex-none">
      <div className="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <h2 className="text-center mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Kom i gang
          </h2>
          <p className="font-medium leading-6 text-sm text-center mt-4 text-gray-600">
            Tilmeld dig med
          </p>
        </div>

        <div>
          <div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <Button variant="outline" size="lg" onClick={updateStep}>
                <svg
                  className="h-10 w-10 fill-emerald-600"
                  viewBox="0 0 1280 333.63934"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs id="defs8" />
                  <path
                    d="m 568.65574,39.868852 v 62.950818 h 50.36065 v 50.36066 h -50.36065 v 100.72131 c 0,18.88525 10.4918,25.18033 27.27869,25.18033 10.4918,0 20.9836,-2.09836 27.27868,-8.39345 v 56.65574 c -8.39344,4.19672 -25.18032,6.29508 -41.96721,6.29508 -46.16393,0 -75.54098,-23.08196 -75.54098,-73.44262 V 153.18033 h -35.67213 v -50.36066 h 35.67213 V 39.868852 Z"
                    id="path354"
                    clipPath="none"
                  />
                  <path
                    d="m 1089.0492,4.1967213 c 134.2951,0 190.9508,73.4426227 190.9508,163.6721287 0,90.22951 -56.6557,163.67213 -190.9508,163.67213 h -54.5574 V 4.1967213 Z"
                    id="path352"
                    clipPath="none"
                  />
                  <path
                    id="path350"
                    clipPath="none"
                    d="M 847.73828 0 C 803.67276 0 768 35.672751 768 79.738281 C 768 123.80381 803.67276 159.47461 847.73828 159.47461 C 891.80382 159.47461 927.47461 123.80381 927.47461 79.738281 C 927.47461 35.672751 891.80382 0 847.73828 0 z M 847.73828 188.85156 C 774.29573 188.85156 713.44226 230.81981 705.04883 331.54102 L 992.52539 331.54102 C 984.13196 230.81981 923.2792 188.85156 847.73828 188.85156 z "
                  />
                  <path
                    d="M 60.852459,16.786885 157.37705,165.77049 251.80328,16.786885 h 60.85246 V 331.54098 H 247.60656 V 128 l -89.18033,134.29508 h -2.09836 L 65.04918,128 V 331.54098 H 0 V 16.786885 Z"
                    id="path348"
                    clipPath="none"
                  />
                  <path
                    id="path346"
                    clipPath="none"
                    d="M 402.88477 0 C 381.90118 4.7369468e-15 365.11523 16.785945 365.11523 37.769531 C 365.11523 58.753116 381.90118 75.541016 402.88477 75.541016 C 423.86834 75.541016 440.65625 58.753116 440.65625 37.769531 C 440.65625 16.785945 423.86834 0 402.88477 0 z M 371.41016 102.82031 L 371.41016 331.54102 L 434.36133 331.54102 L 434.36133 102.82031 L 371.41016 102.82031 z "
                  />
                </svg>

                <span className="sr-only">Mit ID</span>
              </Button>
              <Button variant="outline" size="lg" onClick={updateStep}>
                <GraduationCap className="h-5 w-5 text-emerald-600 fill-emerald-600" />

                <span className="text-sm font-semibold leading-6 text-emerald-600">
                  Studie portal
                </span>
              </Button>
            </div>
          </div>
        </div>
        <div className="relative my-4">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-sm font-medium leading-6">
            <span className="bg-white px-6 text-gray-600">
              Eller brug E-mail og password
            </span>
          </div>
        </div>
        <div>
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                E-mail
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-3 block text-sm leading-6 text-gray-700"
                >
                  Husk mig
                </label>
              </div>

              <div className="text-sm leading-6">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Glemt password?
                </a>
              </div>
            </div>

            <div>
              <Button onClick={updateStep} type="submit" className="w-full">
                Tilmeld
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
