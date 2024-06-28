import i18next from 'i18next';
import { AppRouter } from './router';
import { I18nextProvider } from 'react-i18next';
import { App as KonstaApp } from 'konsta/react';
import type { FunctionComponent } from 'react';

import './i18n';

export const App: FunctionComponent = () => {
  return (
    <I18nextProvider i18n={i18next}>
      <KonstaApp safeAreas theme="ios">
        <AppRouter />
      </KonstaApp>
    </I18nextProvider>
  );
};
