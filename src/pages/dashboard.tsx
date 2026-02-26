import type { BodyType, CardType } from "@/@types/dashboard";
import { QuickInfoCard } from "@/components/cards/dashboard/quick-info-card";
import { QuickInfoContainer } from "@/components/containers/dashboard/quick-info-container";
import { useOutletContext } from "react-router-dom";

export function Dashboard() {
  const dashboardContext: BodyType = useOutletContext();

  const cards: CardType = dashboardContext.cards;

  return (
    <QuickInfoContainer>
      {cards.map((d) => (
        <QuickInfoCard
          key={d.id}
          title={d.title}
          bodyMessage={d.value}
          icon={d.icon}
          iconColor={d.iconColor}
          footerMessage={d.footerMessage}
        />
      ))}
    </QuickInfoContainer>
  );
}
