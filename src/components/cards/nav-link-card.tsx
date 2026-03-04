import { NavLink as RouterNavLink } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

type NavLinkPropsType = {
  title: string;
  icon: LucideIcon;
  to: string;
};

export function NavLinkCard({ title, icon: Icon, to }: NavLinkPropsType) {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        `
        flex items-center gap-2 w-full rounded-md px-3 py-2 transition-colors
        ${
          isActive
            ? "bg-[#ffe138] text-black font-medium"
            : "text-muted-foreground hover:bg-muted"
        }
        `
      }>
      {({ isActive }) => (
        <>
          <Icon
            className={`h-4 w-4 ${
              isActive ? "text-black" : "text-muted-foreground"
            }`}
          />
          <span>{title}</span>
        </>
      )}
    </RouterNavLink>
  );
}
