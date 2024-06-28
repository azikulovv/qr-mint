import { BrowserRouter, Route, Routes } from 'react-router-dom';
import type { FunctionComponent } from 'react';

import { Home } from '@/pages';
import { Scanner } from '@/pages/scanner';
import { QRMintRouter } from '@/pages/qr-mint/router';
import { SettingsRouter } from '@/pages/settings/router';

export const AppRouter: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scanner" element={<Scanner />} />
        <Route path="/qr-mint/*" element={<QRMintRouter />} />
        <Route path="/settings/*" element={<SettingsRouter />} />
      </Routes>
    </BrowserRouter>
  );
};
