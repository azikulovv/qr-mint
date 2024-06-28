import { useNavigate } from 'react-router-dom';
import { useHapticFeedback } from '@vkruglikov/react-telegram-web-app';

import { BackButton } from '@vkruglikov/react-telegram-web-app';
import { BlockTitle, MenuList, MenuListItem, Navbar, Page } from 'konsta/react';
import type { FunctionComponent } from 'react';

import i18next from '@/i18n';

export const Language: FunctionComponent = () => {
  const navigate = useNavigate();
  const [vibrate] = useHapticFeedback();

  const handleSelect = (lang: string) => {
    i18next.changeLanguage(lang);
    vibrate('heavy');
    navigate('/settings');
  };

  return (
    <Page>
      <BackButton onClick={() => navigate('/settings')} />
      <Navbar title="Language" />

      <BlockTitle>Select language:</BlockTitle>

      <MenuList outline strong>
        <MenuListItem onClick={() => handleSelect('ru')} title="Russian" />
        <MenuListItem onClick={() => handleSelect('en')} title="English" />
      </MenuList>
    </Page>
  );
};
