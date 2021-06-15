import { ReactNode } from 'react';
import classes from './Card.module.scss';

type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card = ({ children, className = 'ddd' }: CardProps) => {
  return <div className={`${className} ${classes.card}`}>{children}</div>;
};

export default Card;
