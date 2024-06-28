import { BrowserRouter, Route, Routes } from "react-router-dom";
import type { FunctionComponent } from "react";

import { Home } from "@/pages";

export const AppRouter: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
