import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { App as KonstaApp } from 'konsta/react';
import type { FunctionComponent } from 'react';

import { AppRouter } from './router';
import { NotificationProvider } from './providers/notification';
import './i18n';

export const App: FunctionComponent = () => {
  return (
    <I18nextProvider i18n={i18next}>
      <KonstaApp safeAreas theme="ios">
        <NotificationProvider>
          <AppRouter />
        </NotificationProvider>
      </KonstaApp>
    </I18nextProvider>
  );
};
