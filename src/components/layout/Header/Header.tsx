import { ReactNode } from 'react';

import classes from './Header.module.scss';

type HeaderProps = {
  className: string;
};

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={`${className} ${classes.header}`}>
      Header Component
    </header>
  );
};

export default Header;
