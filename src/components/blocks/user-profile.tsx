import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "~/components/ui/select";

export function UserProfile() {
  return (
    <div>
      <p className="text-xs text-slate-900/80 mb-1">Vælg profil</p>
      <Select defaultValue="markus-soerensen">
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Vælg en profil" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Privat Profil</SelectLabel>
            <SelectItem value="markus-soerensen">Markus Sørensen</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Organization</SelectLabel>
            <SelectItem value="erhversakademi-aarhus">
              Erhversakademi Aarhus
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
