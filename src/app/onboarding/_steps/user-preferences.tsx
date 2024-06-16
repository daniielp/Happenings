import { usePathname, useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { Separator } from "~/components/ui/separator";
import { Switch } from "~/components/ui/switch";

export function UserPreferences() {
  const router = useRouter();
  const pathname = usePathname();

  function updateStep() {
    router.push(`${pathname}?step=4`);
  }

  return (
    <div className="flex h-full flex-col justify-center lg:flex-none">
      <div className="mx-auto flex flex-col flex-1 justify-evenly w-full max-w-sm lg:w-96">
        <div className="mb-8">
          <h2 className="text-center mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Tilpas dine præferencer
          </h2>
          <p className="font-medium leading-6 text-sm text-center mt-4 text-gray-600">
            Gør din oplevelse mere personlig ved at justere dine
            visningsindstillinger.
          </p>
        </div>
        <Separator />
        <div className="my-8 flex flex-col gap-4">
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="show-phonenumber">Vis telefonnummer</Label>
            <Switch id="show-phonenumber" />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <div>
              <Label htmlFor="show-activity">Vis aktivitetstatus</Label>
              <p className="text-sm text-gray-600">
                Din aktivitetstatus viser andre brugere om du er online eller
                ej.
              </p>
            </div>
            <Switch id="show-activity" />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <div>
              <Label htmlFor="show-education">Vis uddannelse</Label>
              <p className="text-sm text-gray-600">
                Ønsker du at vise din uddannelsesbaggrund?
              </p>
            </div>
            <Switch id="show-education" />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <div>
              <Label htmlFor="recieve-messages">Modtag beskeder</Label>
              <p className="text-sm text-gray-600">
                Ønsker du at modtage beskeder fra andre brugere?
              </p>
            </div>
            <Switch id="recieve-messages" />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="public-profile">Offentlig profil</Label>
            <Switch id="public-profile" />
          </div>
        </div>
        <Button onClick={updateStep} className="w-full mt-auto">
          Fortsæt
        </Button>
      </div>
    </div>
  );
}
