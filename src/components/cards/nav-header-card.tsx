import { Dumbbell } from "lucide-react";

export function NavHeaderCard() {
  return (
    <div className="flex w-full justify-start gap-3 px-4">
      <div className="flex justify-center items-center rounded-xl p-2">
        <Dumbbell className="h-10 w-10" color="hsla(51, 100%, 49%, 1)" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="capitalize">fitness Code</p>
        <p className="text-xs text-gray-400">Admin Portal</p>
      </div>
    </div>
  );
}
