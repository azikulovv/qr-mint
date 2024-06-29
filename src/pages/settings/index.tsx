import { useNavigate } from 'react-router-dom';
import { useHapticFeedback } from '@vkruglikov/react-telegram-web-app';

import { HiLanguage } from 'react-icons/hi2';
import { BackButton } from '@vkruglikov/react-telegram-web-app';
import { List, MenuListItem, Navbar, Page } from 'konsta/react';
import type { FunctionComponent } from 'react';

import { Tabbar } from '@/components/Tabbar';

export const Settings: FunctionComponent = () => {
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
      <Navbar title="Settings" />

      <List outline strong menuList>
        <MenuListItem
          onClick={() => {
            vibrate('heavy');
            navigate('/settings/language');
          }}
          title="Language"
          media={<HiLanguage className="w-[1.5rem] h-[1.5rem]" />}
        />
      </List>

      <Tabbar />
    </Page>
  );
};
