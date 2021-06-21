import { ReactNode } from 'react';

import classes from './RoundedSidesButton.module.scss';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

const RoundedSidesButton = ({
  type = 'button',
  onClick = () => {},
  className = '',
  children,
}: ButtonProps) => {
  return (
    <button
      className={`${className} ${classes.button}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default RoundedSidesButton;
