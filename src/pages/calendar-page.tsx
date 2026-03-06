import { BaseContainer } from "@/components/containers/dashboard/base-container";
import { TableContainer } from "@/components/containers/table/table-container";
import { VisitorCalendar } from "@/components/custom/calendar/visitor-calendar";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

export function CalendarPage() {
  const visitorCalendarContext: BodyType = useOutletContext();

  const [date, setDate] = useState<Date | undefined>(new Date());

  const formattedDate = date?.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <BaseContainer>
      <TableContainer headerTitle={formattedDate}>
        <VisitorCalendar />
      </TableContainer>
    </BaseContainer>
  );
}
