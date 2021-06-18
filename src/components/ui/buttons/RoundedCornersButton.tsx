import { ReactNode } from 'react';

import classes from './RoundedCornersButton.module.scss';

type ButtonProps = {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

const RoundedSidesButton = ({
  children,
  type = 'button',
  className = '',
}: ButtonProps) => {
  return (
    <button type={type} className={`${className} ${classes.button}`}>
      {children}
    </button>
  );
};

export default RoundedSidesButton;
