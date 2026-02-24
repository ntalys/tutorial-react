import {
  LayoutDashboard,
  Users,
  Calendar,
  Newspaper,
  NotebookText,
} from "lucide-react";
import { NavLinkCard } from "@/components/cards/nav-link-card";

export function NavBodyCard() {
  return (
    <div className="flex flex-col w-full gap-3">
      <NavLinkCard title="Dashboard" icon={LayoutDashboard} to="/dashboard" />
      <NavLinkCard title="Users" icon={Users} to="/users" />
      <NavLinkCard title="Calendar" icon={Calendar} to="/calendar" />
      <NavLinkCard title="Gym Plans" icon={NotebookText} to="/gym-plans" />
      <NavLinkCard title="Newsletter" icon={Newspaper} to="/newsletter" />
    </div>
  );
}
