"use client";
import { Calendar, Home, MessageCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge } from "~/components/ui/badge";
import { navigation } from "~/data/menu";
import { cn } from "~/lib/utils";



export function NavItems() {
  const pathname = usePathname();
  return (
    <>
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-slate-700 transition-all hover:text-emerald-500 hover:bg-gray-100",
            pathname === item.href && "text-emerald-500 bg-gray-100"
          )}
        >
          <item.icon className="h-4 w-4" />
          {item.name}
          {item.badge_content && (
            <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
              {item.badge_content}
            </Badge>
          )}
        </Link>
      ))}
    </>
  );
}
