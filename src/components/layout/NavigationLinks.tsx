import React from 'react';
import { cn } from "@/lib/utils";

interface NavigationLinksProps {
  className?: string;
}

export const NavigationLinks: React.FC<NavigationLinksProps> = ({ className }) => {
  const links = [
    { title: "Book Appointment", href: "#" },
    { title: "Health Records", href: "#" },
    { title: "View Consultations", href: "#" },
  ];

  return (
    <nav className={cn("flex items-start gap-3 max-sm:hidden", className)}>
      {links.map((link) => (
        <a
          key={link.title}
          href={link.href}
          className="text-[#231F20] text-center text-base font-bold rounded p-3 hover:bg-gray-100 transition-colors"
        >
          {link.title}
        </a>
      ))}
    </nav>
  );
};
