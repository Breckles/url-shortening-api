import { Fragment as div, ReactNode } from 'react';

import classes from './Layout.module.scss';

type layoutProps = {
  children: ReactNode;
};

const Layout = (props: layoutProps) => {
  return <div className={classes.layout}>{props.children}</div>;
};

export default Layout;
