import { Home, MessageCircle, Calendar } from "lucide-react";

export const navigation = [
    { name: "Events", href: "/", icon: Home },
    { name: "Calender", href: "/calender", icon: Calendar },
    {
      name: "Messages",
      href: "/messages",
      icon: MessageCircle,
      badge_content: 6,
    },
  ];