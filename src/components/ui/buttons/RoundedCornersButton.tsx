import { ReactNode } from 'react';

import classes from './RoundedCornersButton.module.scss';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

const RoundedSidesButton = ({
  children,
  onClick = () => {},
  type = 'button',
  className = '',
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
