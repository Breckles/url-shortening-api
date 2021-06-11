import { Fragment } from 'react';

import classes from './Layout.module.scss';

const Layout = (props: any) => {
  return <Fragment>{props.children}</Fragment>;
};

export default Layout;
