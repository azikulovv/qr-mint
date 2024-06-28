import { Block, Page } from 'konsta/react';
import type { FunctionComponent } from 'react';

import { Tabbar } from '@/components/Tabbar';

export const Home: FunctionComponent = () => {
  return (
    <Page>
      <Block strong inset className="space-y-4">
        <p>
          <b className="text-xl">QR Mint Team</b>
        </p>
        <p>
          <span>
            <b>Backend Developer: </b>
            <span>Viktor</span>
          </span>
          <br />
          <span>
            <b>Frontend Developer: </b>
            <span>Maulen</span>
          </span>
          <br />
          <span>
            <b>Graphic Designer: </b>
            <span>Nizami</span>
          </span>
        </p>
        <p></p>
      </Block>

      <Tabbar />
    </Page>
  );
};
