import { useNavigate } from 'react-router-dom';

import { BackButton, useHapticFeedback } from '@vkruglikov/react-telegram-web-app';
import { MenuList, MenuListItem, Navbar, Page } from 'konsta/react';
import { HiLanguage } from 'react-icons/hi2';
import type { FunctionComponent } from 'react';

import { Tabbar } from '@/components/Tabbar';

export const Settings: FunctionComponent = () => {
  const navigate = useNavigate();
  const [vibrate] = useHapticFeedback();

  return (
    <Page>
      <BackButton onClick={() => navigate('/')} />
      <Navbar title="Settings" />

      <MenuList outline strong>
        <MenuListItem
          onClick={() => {
            vibrate('heavy');
            navigate('/settings/language');
          }}
          title="Language"
          media={<HiLanguage className="w-[1.5rem] h-[1.5rem]" />}
        />
      </MenuList>
      <Tabbar />
    </Page>
  );
};
