import { Image } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { FileUploader } from "~/components/ui/file-uploader";
import { Input } from "~/components/ui/input";
import { Separator } from "~/components/ui/separator";

export function UploadProfile() {
  const [files, setFiles] = useState<File[]>();
  const router = useRouter();
  const pathname = usePathname();

  function updateStep() {
    router.push(`${pathname}?step=3`);
  }

  return (
    <div className="flex h-full flex-col justify-center lg:flex-none">
      <div className="mx-auto flex flex-col flex-1 justify-evenly w-full max-w-sm lg:w-96">
        <div className="mb-8">
          <h2 className="text-center mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Upload dit profilbillede
          </h2>
          <p className="font-medium leading-6 text-sm text-center mt-4 text-gray-600">
            Personliggør din profil ved at uploade et billede af dig selv.
          </p>
        </div>
        <Separator />
        <div className="my-8 flex flex-col gap-4">
          <FileUploader maxFiles={1} maxSize={4 * 1024 * 1024} />
        </div>
        <Button onClick={updateStep} className="w-full mt-auto">
          Fortsæt
        </Button>
      </div>
    </div>
  );
}
