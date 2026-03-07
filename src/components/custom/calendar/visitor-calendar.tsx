import { useState } from "react";
import { format, isSaturday, isSunday, isToday } from "date-fns";

import { Calendar } from "@/components/ui/calendar";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function VisitorCalendar() {
  const [selectedDay, setSelectedDay] = useState<Date | undefined>();
  const [month, setMonth] = useState(new Date());

  const bookedDates = Array.from(
    { length: 15 },
    (_, i) => new Date(new Date().getFullYear(), 1, 12 + i),
  );

  const isWeekend = (date: Date) => isSaturday(date) || isSunday(date);

  // MOCK DATA (later we move this to props)
  const visits: Record<string, number> = {
    "2026-03-09": 12,
    "2026-03-02": 30,
    "2026-03-03": 55,
    "2026-03-04": 18,
    "2026-03-05": 66,
    "2026-03-06": 48,
    "2026-03-27": 5,
  };

  const DAILY_LIMIT = 50;

  const getVisits = (date: Date) => {
    return visits[format(date, "yyyy-MM-dd")] ?? 0;
  };

  const getDayColor = (count: number) => {
    if (count === 0) return "";
    if (count < DAILY_LIMIT * 0.6)
      return "dark:bg-green-300 dark:text-green-700 bg-green-800 text-green-100 hover:bg-green-900 dark:hover:bg-green-200";
    if (count < DAILY_LIMIT)
      return "dark:bg-yellow-300 dark:text-yellow-700 bg-yellow-800 text-yellow-100 hover:bg-yellow-900 dark:hover:bg-yellow-200";
    return "dark:bg-red-300 dark:text-red-700 bg-red-800 text-red-100 hover:bg-red-900 dark:hover:bg-red-200";
  };

  return (
    <>
      <Calendar
        mode="single"
        selected={selectedDay}
        month={month}
        onMonthChange={setMonth}
        captionLayout="dropdown"
        showOutsideDays={false}
        navLayout="after"
        className="w-full rounded-xl border"
        classNames={{
          table: "w-full bg-purple-500 border-collapse",
          row: "grid grid-cols-7",
          head_row: "grid grid-cols-7",
          cell: "h-24",
          head_cell: "text-muted-foreground text-sm text-center",
          dropdowns: "flex justify-start gap-2 w-full mt-5",
          nav: "relative -top-10 flex flex-row justify-end",
        }}
        modifiers={{
          booked: bookedDates,
        }}
        modifiersClassNames={{
          today: "bg-transparent",
          booked:
            "dark:bg-red-300 dark:text-red-700 bg-red-800 text-red-100 cursor-not-allowed",
          disabled: "[&>button]:line-through opacity-40 text-red-500",
        }}
        formatters={{
          formatMonthDropdown: (date) => {
            return date.toLocaleString("default", { month: "long" });
          },
        }}
        components={{
          DayButton: ({ day, ...props }) => {
            const visitCount = getVisits(day.date);
            const colorClass = getDayColor(visitCount);

            return (
              <div className="flex-1 w-full h-full flex justify-center items-center">
                <Button
                  {...props}
                  onClick={() => setSelectedDay(day.date)}
                  className={`relative w-[100px] h-[100px] flex flex-col items-start 
                  justify-center p-2 rounded-lg border 
                  transition
                  cursor-pointer
                  disabled:cursor-not-allowed
                  ${colorClass}`}
                  disabled={isWeekend(day.date)}>
                  <span
                    className={`text-sm font-semibold  absolute top-2 left-2
                  ${
                    isToday(day.date)
                      ? "bg-gray-400/30 text-white w-6 h-6 rounded-full flex justify-center items-center"
                      : ""
                  }`}>
                    {day.date.getDate()}
                  </span>

                  {visitCount > 0 && (
                    <span className="flex flex-1 w-full justify-end items-end text-xs mt-1">
                      {visitCount} visits
                    </span>
                  )}
                </Button>
              </div>
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
