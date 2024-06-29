import { useNavigate } from 'react-router-dom';
import { useHapticFeedback } from '@vkruglikov/react-telegram-web-app';

import { BackButton } from '@vkruglikov/react-telegram-web-app';
import { Navbar, Page } from 'konsta/react';
import type { FunctionComponent } from 'react';

import { Tabbar } from '@/components/Tabbar';

export const QRMint: FunctionComponent = () => {
  const navigate = useNavigate();
  const [vibrate] = useHapticFeedback();

  return (
    <Page>
      <BackButton
        onClick={() => {
          navigate('/');
          vibrate('heavy');
        }}
      />
      <Navbar title="QR Mint" />

      <Tabbar />
    </Page>
  );
};
