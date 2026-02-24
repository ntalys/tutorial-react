import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-util";
import { LogOut } from "lucide-react";

export function NavFooterCard() {
  const { logoutUser } = useAuth();

  function handleLogout() {
    return logoutUser();
  }

  return (
    <div className="flex flex-col w-full gap-3">
      <div className="flex w-full justify-start gap-3 px-4">
        <div className="flex justify-center items-center">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="@shadcn"
              className="grayscale"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="capitalize">Admin User</p>
          <p className="text-xs">test@gmail.com</p>
        </div>
      </div>
      <div className="flex w-full justify-start items-center px-4">
        <Button
          className="w-full text-red-500 cursor-pointer"
          onClick={handleLogout}>
          <LogOut />
          Logout
        </Button>
      </div>
    </div>
  );
}
