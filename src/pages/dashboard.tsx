import type { BodyType, CardType } from "@/@types/dashboard";
import { QuickInfoCard } from "@/components/cards/dashboard/quick-info-card";
import { BaseContainer } from "@/components/containers/dashboard/base-container";
import { QuickInfoContainer } from "@/components/containers/dashboard/quick-info-container";
import DemoPage from "@/components/table/page";
import { useOutletContext } from "react-router-dom";

export function Dashboard() {
  const dashboardContext: BodyType = useOutletContext();

  const cards: CardType = dashboardContext.cards;

  const { users } = dashboardContext.recent_activity;

  return (
    <div className="flex flex-col">
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
      <BaseContainer>
        <DemoPage users={users} />
      </BaseContainer>
    </div>
  );
}
