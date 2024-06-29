import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useHapticFeedback } from '@vkruglikov/react-telegram-web-app';

import { HiLanguage } from 'react-icons/hi2';
import { BackButton } from '@vkruglikov/react-telegram-web-app';
import { BlockTitle, List, MenuListItem, Page } from 'konsta/react';
import type { FunctionComponent } from 'react';

import { Tabbar } from '@/components/Tabbar';

export const Settings: FunctionComponent = () => {
  const navigate = useNavigate();
  const [vibrate] = useHapticFeedback();
  const { t } = useTranslation();

  return (
    <Page>
      <BackButton
        onClick={() => {
          navigate('/');
          vibrate('heavy');
        }}
      />

      <BlockTitle>{t('settings.title')}</BlockTitle>

      <List outline strong menuList>
        <MenuListItem
          onClick={() => {
            vibrate('heavy');
            navigate('/settings/language');
          }}
          title={t('settings.menu-list.language')}
          media={<HiLanguage className="w-[1.5rem] h-[1.5rem]" />}
        />
      </List>

      <Tabbar />
    </Page>
  );
};
