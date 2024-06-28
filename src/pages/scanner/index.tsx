import { useHapticFeedback, useScanQrPopup } from '@vkruglikov/react-telegram-web-app';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { BackButton } from '@vkruglikov/react-telegram-web-app';
import { Block, Button, Navbar, Notification, Page } from 'konsta/react';
import {HiCheckCircle} from 'react-icons/hi2';
import type { FunctionComponent } from 'react';

import { Tabbar } from '@/components/Tabbar';

export const Scanner: FunctionComponent = () => {
  const navigate = useNavigate();
  const [show] = useScanQrPopup();
  const [vibrate] = useHapticFeedback();

  const [qrValue, setQrValue] = useState<string>();
  const [isNotificationOpened, setIsNotificationOpened] = useState<boolean>(false);

  const handleScan = () => {
    vibrate('heavy');
    show({ text: 'Please scan QR code!' }, (value) => {
      setQrValue(value);
    });
  };

  const handleCopy = () => {
    setIsNotificationOpened(true);

    setTimeout(() => {
      setIsNotificationOpened(false);
    }, 2000);
  };

  return (
    <Page>
      <BackButton onClick={() => navigate('/')} />
      <Notification icon={<HiCheckCircle/>} opened={isNotificationOpened} title="QR Mint" subtitle="Successfully copied!" />

      <Navbar title="Scanner" />

      <Block>
        <p>
          <b>Value:</b>
          <span>{qrValue}</span>
        </p>
        <br />

        <Button outline onClick={handleCopy}>
          Copy
        </Button>

        <br />

        <Button onClick={handleScan}>Open Scanner</Button>
      </Block>

      <Tabbar />
    </Page>
  );
};
