import { AppRouter } from "./router";
import { App as KonstaApp } from "konsta/react";
import type { FunctionComponent } from "react";

export const App: FunctionComponent = () => {
  return (
    <KonstaApp safeAreas theme="ios">
      <AppRouter />
    </KonstaApp>
  );
};
