import { Outlet } from "react-router-dom";
import { NavContainer } from "@/components/containers/nav-container";
import { MainContainer } from "@/components/containers/main-container";
import { HeaderContainer } from "@/components/containers/header-container";
import { HeaderCard } from "../cards/header-card";
import { ThemeModeToggle } from "@/components/theme/theme-mode-toggle";
import { BodyContainer } from "@/components/containers/body-container";
import { NavHeaderContainer } from "@/components/containers/nav-header-container";
import { NavBodyContainer } from "@/components/containers/nav-body-container";
import { NavFooterContainer } from "../containers/nav-footer-container";
import { NavHeaderCard } from "@/components/cards/nav-header-card";
import { NavFooterCard } from "@/components/cards/nav-footer-card";
import { NavBodyCard } from "@/components/cards/nav-body-card";

export function DashboardLayout() {
  return (
    <MainContainer>
      <NavContainer
        header={
          <NavHeaderContainer>
            <NavHeaderCard />
          </NavHeaderContainer>
        }
        body={
          <NavBodyContainer>
            <NavBodyCard />
          </NavBodyContainer>
        }
        footer={
          <NavFooterContainer>
            <NavFooterCard />
          </NavFooterContainer>
        }
      />
      <HeaderContainer>
        <HeaderCard
          title="title"
          subtitle="subtitle"
          themeModeToggleButton={<ThemeModeToggle />}
        />
      </HeaderContainer>
      <BodyContainer>
        <Outlet />
      </BodyContainer>
    </MainContainer>
  );
}
