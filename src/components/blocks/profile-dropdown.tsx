import Link from "next/link";
import Image from "next/image"
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuSubTrigger,
} from "~/components/ui/dropdown-menu";
import { LogOut, Settings } from "lucide-react";
import React from "react";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

interface ProfileDropdownProps
  extends React.ComponentPropsWithRef<typeof DropdownMenuSubTrigger> {}

export function ProfileDropdown({ className, ...props }: ProfileDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="secondary"
          className={cn("size-8 rounded-full", className)}
        >
          <Avatar className="size-8">
            <AvatarImage src="/profile/markus.jpg" alt="Markus Sørensen" />
            <AvatarFallback>MS</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Markus Sørensen</p>
            <p className="text-xs leading-none text-muted-foreground">
              ms@students.eaaa.dk
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/account">
              <Image alt="organization erhversakademi aarhus logo" src="/organizations/erhversakademi-aarhus.png" decoding="async" width={16} height={16} className="mr-2 size-4" />
                Erhversakademi Aarhus
              <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/account/settings">
              <Settings className="mr-2 size-4" aria-hidden="true" />
              Indstillinger
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/signout">
            <LogOut className="mr-2 size-4" aria-hidden="true" />
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
