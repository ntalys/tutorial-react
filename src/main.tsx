import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@/styles/index.css";

import App from "./App.tsx";
import { ThemeProvider } from "@/components/providers/theme-provider.tsx";
import { AuthProvider } from "@/lib/auth-util.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
);
