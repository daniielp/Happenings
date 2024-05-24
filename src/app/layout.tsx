import type { Metadata } from "next";
import Link from "next/link";

import "./globals.css";

import { Inter } from "next/font/google";
import {
  Menu,
  Search,
} from "lucide-react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { cn } from "~/lib/utils";
import Image from "next/image";
import { UserProfile } from "~/components/blocks/user-profile";
import { ProfileDropdown } from "~/components/blocks/profile-dropdown";
import { Toaster } from "~/components/ui/sonner";
import { CreateEvent } from "~/components/blocks/create-event";
import { NavItems } from "~/components/blocks/nav-items";
import { navigation } from "~/data/menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Happenings - App",
  description: "Vær en del af fællesskabet",
  icons: "/favicon.ico",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="da">
      <body className={cn(inter.className, "dark:bg-slate-900")}>
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <div className="hidden border-r bg-gray-50/40 md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-semibold"
                >
                  <Image
                    src="/logo_color.svg"
                    alt="The Happenings Logo"
                    loading="lazy"
                    width="32"
                    height="32"
                    decoding="async"
                    className="h-8"
                  />
                  <span className="text-slate-900 text-xl">Happenings</span>
                </Link>
              </div>
              <div className="flex-1">
                <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-2">
                  <NavItems />
                  <CreateEvent variant="outline" />
                </nav>
              </div>
              <div className="mt-auto p-4">
                <p className="text-xs text-slate-900/80 mb-1">Vælg profil</p>
                <UserProfile />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 md:hidden"
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col">
                  <nav className="grid gap-2 text-lg font-medium">
                    <Link
                      href="#"
                      className="flex items-center gap-2 text-lg font-semibold"
                    >
                      <Image
                        src="/logo_color.svg"
                        alt="The Happenings Logo"
                        loading="lazy"
                        width="32"
                        height="32"
                        decoding="async"
                        className="h-6"
                      />
                      <span className="sr-only">Happenings</span>
                    </Link>
                    {navigation.map((item) => (
                      <Link
                        key={"sheet-" + item.name}
                        href={item.href}
                        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                      >
                        <item.icon />
                        {item.name}
                        {item.badge_content && (
                          <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                            6
                          </Badge>
                        )}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto">
                    <UserProfile />
                  </div>
                </SheetContent>
              </Sheet>
              <div className="w-full flex-1">
                <form>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search products..."
                      className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                    />
                  </div>
                </form>
              </div>
              <ProfileDropdown />
            </header>
            <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
              {children}
            </main>
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
