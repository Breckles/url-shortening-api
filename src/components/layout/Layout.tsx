import { Fragment as div, ReactNode } from 'react';

import Header from './header/Header';
import Footer from './footer/Footer';

import classes from './Layout.module.scss';

type layoutProps = {
  children: ReactNode;
  className?: string;
};

const Layout = ({ children, className }: layoutProps) => {
  return (
    <div className={`${className || ''} ${classes.layout}`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
