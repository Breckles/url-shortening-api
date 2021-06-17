import { ReactNode } from 'react';

import classes from './SellingPoint.module.scss';

type SellingPointProps = {
  className?: string;
  iconPath: string;
  children: ReactNode;
};

const SellingPoint = ({
  iconPath,
  children,
  className = '',
}: SellingPointProps) => {
  return (
    <article className={`${className} ${classes.sellingPoint}`}>
      <div className={classes.iconContainer}>
        <img src={iconPath} alt="" />
      </div>
      {children}
    </article>
  );
};

export default SellingPoint;
