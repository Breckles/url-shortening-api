import { ReactNode } from 'react';

import classes from './RoundedSidesButton.module.scss';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children?: ReactNode;
};

const RoundedSidesButton = ({ type, className, children }: ButtonProps) => {
  return (
    <button
      type={type || 'button'}
      className={`${className || ''} ${classes.button}`}
    >
      {children}
    </button>
  );
};

export default RoundedSidesButton;
