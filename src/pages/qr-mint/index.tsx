import { Tabbar } from '@/components/Tabbar';
import { BackButton } from '@vkruglikov/react-telegram-web-app';
import { Navbar, Page } from 'konsta/react';
import type { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';

export const QRMint: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <BackButton onClick={() => navigate('/')} />
      <Navbar title="QR Mint" />

      <Tabbar />
    </Page>
  );
};
