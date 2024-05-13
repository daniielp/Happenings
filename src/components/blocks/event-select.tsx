import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

const eventOptions = [
  { value: "interested", label: "Interesseret" },
  { value: "participating", label: "Deltager" },
  { value: "not-participating", label: "Deltager ikke" },
];

export function EventSelect() {
  return (
    <Select defaultValue="interested">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Vælg type" />
      </SelectTrigger>
      <SelectContent>
        {eventOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
