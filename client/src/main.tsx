import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Routes from "./routers/routes.tsx";
import { AuthProvider } from "./services/providers/authProvider.tsx";
import { Toaster } from "./components/ui/sonner.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <Routes />
      <Toaster />
    </AuthProvider>
  </StrictMode>
);
