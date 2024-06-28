import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { App } from "./App";
import "@/assets/styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
