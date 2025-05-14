import React from 'react';
import { Logo } from './Logo';
import { NavigationLinks } from './NavigationLinks';
import { LanguageSwitch } from './RightSection/LanguageSwitch';
import { NotificationBell } from './RightSection/NotificationBell';
import { UserProfile } from './RightSection/UserProfile';

export const MainHeader = () => {
  return (
    <header className="flex w-full h-[76px] justify-between items-center border border-zinc-300 bg-white px-[200px] py-2 max-md:px-10 max-sm:px-4">
      <div className="flex items-center gap-4">
        <Logo />
        <NavigationLinks />
      </div>
      <div className="flex items-center gap-6">
        <LanguageSwitch />
        <NotificationBell />
        <UserProfile 
          name="Ajmal Al- Rashid"
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/9ec10e1ad29c18916e1b78a41300e5ab5a40e65a"
        />
      </div>
    </header>
  );
};
