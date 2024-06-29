import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHapticFeedback, useScanQrPopup } from '@vkruglikov/react-telegram-web-app';

import { BackButton } from '@vkruglikov/react-telegram-web-app';
import { Block, Button, Navbar, Page } from 'konsta/react';
import type { FunctionComponent } from 'react';

import { Tabbar } from '@/components/Tabbar';
import { useNotification } from '@/providers/notification';

export const Scanner: FunctionComponent = () => {
  const navigate = useNavigate();
  const [show, close] = useScanQrPopup();
  const [vibrate] = useHapticFeedback();

  const [qrValue, setQrValue] = useState<string>();
  const { notify } = useNotification();

  const handleScan = () => {
    vibrate('heavy');

    try {
      show({ text: 'Please scan QR code!' }, (value) => {
        if (!value) return;

        setQrValue(value);
        close();
      });
    } catch (error) {
      console.error(error);
      notify({ type: 'error', message: 'The scanner could not be opened!' });
    }
  };

  const handleCopy = () => {
    notify({ type: 'success', message: 'Successfully copied!' });
  };

  return (
    <Page>
      <BackButton
        onClick={() => {
          navigate('/');
          vibrate('heavy');
        }}
      />

      <Navbar title="Scanner" />

      <Block>
        <p>
          <b>Value:</b>
          <span>{qrValue}</span>
        </p>
        <br />

        <Button outline large onClick={handleCopy}>
          Copy
        </Button>

        <br />

        <Button large onClick={handleScan}>
          Open Scanner
        </Button>
      </Block>

      <Tabbar />
    </Page>
  );
};
