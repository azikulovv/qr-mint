import { useCallback, useState } from "react";
import { useLocation } from "react-router-dom";
import { useHapticFeedback } from "@vkruglikov/react-telegram-web-app";
import * as Konsta from "konsta/react";
import { HiHome, HiQrCode, HiBanknotes, HiCog } from "react-icons/hi2";
import type { FunctionComponent } from "react";

enum tabs {
  home = "HOME",
  "scanner" = "SCANNR",
  "qrMint" = "QR-MINT",
  "settings" = "SETTINGS",
}

export const Tabbar: FunctionComponent = () => {
  const location = useLocation();
  const [vibrate] = useHapticFeedback();

  const [tabbar, setTabbar] = useState<string>(tabs.home);

  const handleClick = (name: string) => {
    vibrate("heavy");
    setTabbar(name);
  };

  const isActive = useCallback(
    ({ pathname, tabName }: { pathname: string; tabName: string }) =>
      location.pathname === pathname && tabbar === tabName,
    [location.pathname, tabbar]
  );

  return (
    <Konsta.Tabbar className="left-0 bottom-0 fixed">
      <Konsta.TabbarLink
        onClick={() => handleClick(tabs.home)}
        active={isActive({ pathname: "/", tabName: tabs.home })}
        icon={<HiHome />}
        label={"Home"}
      />

      <Konsta.TabbarLink
        onClick={() => handleClick(tabs.scanner)}
        active={isActive({ pathname: "/scanner", tabName: tabs.scanner })}
        icon={<HiQrCode />}
        label={"Scanner"}
      />

      <Konsta.TabbarLink
        onClick={() => handleClick(tabs.qrMint)}
        active={isActive({ pathname: "/qr-mint", tabName: tabs.qrMint })}
        icon={<HiBanknotes />}
        label={"QR Mint"}
      />

      <Konsta.TabbarLink
        onClick={() => handleClick(tabs.settings)}
        active={isActive({ pathname: "/settings", tabName: tabs.settings })}
        icon={<HiCog />}
        label={"Settings"}
      />
    </Konsta.Tabbar>
  );
};
