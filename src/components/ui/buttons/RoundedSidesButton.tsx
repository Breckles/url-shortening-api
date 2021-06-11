import { ReactNode } from 'react';

export type ButtonProps = {
  type: 'button' | 'submit' | 'reset' | undefined;
  children?: ReactNode;
};

const RoundedSidesButton = ({ type, children }: ButtonProps) => {
  return <button type={type || 'button'}>{children}</button>;
};

export default RoundedSidesButton;
