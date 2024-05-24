import { Home, MessageCircle, Calendar } from "lucide-react";

export const navigation = [
    { name: "Events", href: "/", icon: Home },
    { name: "Kalender", href: "/kalender", icon: Calendar },
    {
      name: "Beskeder",
      href: "/messages",
      icon: MessageCircle,
      badge_content: 6,
    },
  ];