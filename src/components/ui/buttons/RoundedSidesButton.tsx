import { ReactNode } from 'react';

import classes from './RoundedSidesButton.module.scss';

type ButtonProps = {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

const RoundedSidesButton = ({
  type = 'button',
  className = '',
  children,
}: ButtonProps) => {
  return (
    <button type={type} className={`${className} ${classes.button}`}>
      {children}
    </button>
  );
};

export default RoundedSidesButton;
