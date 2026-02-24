import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import { Dashboard } from "@/pages/dashboard";
import { Users } from "@/pages/users";
import { Calendar } from "@/pages/calendar";
import { Newsletter } from "@/pages/newsletter";
import { GymPlans } from "@/pages/gym-plans";
import { SignInLayout } from "./components/layouts/sign-in-layout";
import { PrivateRoute } from "@/components/private/private-route";
import { PageNotFound } from "@/pages/404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public route */}
        <Route path="/sign-in" element={<SignInLayout />} />

        {/* Protected layout wrapper */}
        <Route element={<PrivateRoute loginUrl="/sign-in" />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/gym-plans" element={<GymPlans />} />
            <Route path="/newsletter" element={<Newsletter />} />
          </Route>
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
