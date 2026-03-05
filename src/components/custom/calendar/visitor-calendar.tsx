import { useState } from "react";
import { format } from "date-fns";

import { Calendar } from "@/components/ui/calendar";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function VisitorCalendar() {
  const [selectedDay, setSelectedDay] = useState<Date | undefined>();
  const [month, setMonth] = useState(new Date());

  // MOCK DATA (later we move this to props)
  const visits: Record<string, number> = {
    "2026-03-01": 12,
    "2026-03-02": 30,
    "2026-03-03": 55,
    "2026-03-04": 18,
    "2026-03-05": 66,
    "2026-03-06": 48,
    "2026-03-07": 5,
  };

  const DAILY_LIMIT = 50;

  const getVisits = (date: Date) => {
    return visits[format(date, "yyyy-MM-dd")] ?? 0;
  };

  const getDayColor = (count: number) => {
    if (count === 0) return "";
    if (count < DAILY_LIMIT * 0.6)
      return "dark:bg-green-300 dark:text-green-700 bg-green-800 text-green-100";
    if (count < DAILY_LIMIT)
      return "dark:bg-yellow-300 dark:text-yellow-700 bg-yellow-800 text-yellow-100";
    return "dark:bg-red-300 dark:text-red-700 bg-red-800 text-red-100";
  };

  return (
    <>
      <Calendar
        mode="single"
        selected={selectedDay}
        month={month}
        onMonthChange={setMonth}
        captionLayout="dropdown"
        fixedWeeks
        className="w-full rounded-xl border p-3"
        classNames={{
          table: "w-full border-collapse",
          row: "grid grid-cols-7 gap-2",
          head_row: "grid grid-cols-7 gap-2",
          cell: "h-24",
          day: "w-[20%] h-[80px] p-2 flex flex-col items-center justify-center rounded-lg",
          head_cell: "text-muted-foreground text-sm text-center",
          dropdowns: "flex justify-center gap-2 w-full mt-3",
        }}
        components={{
          DayButton: ({ day, ...props }) => {
            const visitCount = getVisits(day.date);
            const colorClass = getDayColor(visitCount);

            return (
              <button
                {...props}
                onClick={() => setSelectedDay(day.date)}
                className={`w-[100px] h-[100px] flex flex-col items-start 
                justify-start p-2 rounded-lg border 
                hover:opacity-80 transition cursor-pointer ${colorClass}`}>
                <span className="text-sm font-semibold">
                  {day.date.getDate()}
                </span>

                {visitCount > 0 && (
                  <span className="flex flex-1 w-full justify-end items-end text-xs mt-1">
                    {visitCount} visits
                  </span>
                )}
              </button>
            );
          },
        }}
      />

      <Dialog
        open={!!selectedDay}
        onOpenChange={() => setSelectedDay(undefined)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {selectedDay && format(selectedDay, "MMMM d, yyyy")}
            </DialogTitle>
          </DialogHeader>

          <p>
            Visits:{" "}
            <span className="font-semibold">
              {selectedDay && getVisits(selectedDay)}
            </span>
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
}
