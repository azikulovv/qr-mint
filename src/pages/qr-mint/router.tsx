import { Route, Routes } from 'react-router-dom';
import type { FunctionComponent } from 'react';

import { QRMint } from '@/pages/qr-mint';

export const QRMintRouter: FunctionComponent = () => {
  return (
    <Routes>
      <Route path={'/'} element={<QRMint/>} />
    </Routes>
  );
};
