import { Outlet, useLocation } from "react-router-dom";
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

import dashboard from "../../../schemas/dashboard.json";
import users from "../../../schemas/users.json";
import calendar from "../../../schemas/calendar.json";

import type { HeaderType } from "@/@types/dashboard-header";

export function DashboardLayout() {
  const routeSchemas: Record<string, { header: HeaderType; body: any }> = {
    "/dashboard": {
      header: Object.assign({}, ...dashboard.data.map((d) => d.header)),
      body: Object.assign({}, ...dashboard.data.map((d) => d.body)),
    },
    "/users": {
      header: Object.assign({}, ...users.data.map((d) => d.header)),
      body: Object.assign({}, ...users.data.map((d) => d.body)),
    },
    "/calendar": {
      header: Object.assign({}, ...calendar.data.map((d) => d.header)),
      body: Object.assign({}, ...calendar.data.map((d) => d.body)),
    },
    // add more routes here
  };

  const location = useLocation();
  const routeData =
    routeSchemas[location.pathname] ?? routeSchemas["/dashboard"];

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
          title={routeData.header.title}
          subtitle={routeData.header.subtitle}
          themeModeToggleButton={<ThemeModeToggle />}
        />
      </HeaderContainer>
      <BodyContainer>
        <Outlet context={routeData.body} />
      </BodyContainer>
    </MainContainer>
  );
}
