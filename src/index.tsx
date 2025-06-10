import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MacbookAirDark } from "./screens/MacbookAirDark/MacbookAirDark";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <MacbookAirDark />
  </StrictMode>,
);
