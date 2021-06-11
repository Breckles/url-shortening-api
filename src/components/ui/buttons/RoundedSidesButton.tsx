import { ReactNode } from 'react';

import classes from './RoundedSidesButton.module.scss';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  children?: ReactNode;
};

const RoundedSidesButton = ({ type, children }: ButtonProps) => {
  return <button type={type || 'button'}>{children}</button>;
};

export default RoundedSidesButton;
