import classes from './HeaderNav.module.scss';

type HeaderNavProps = {
  className?: string;
};

const HeaderNav = ({ className }: HeaderNavProps) => {
  return <nav className={`${className || ''}`}>HeaderNav Component</nav>;
};

export default HeaderNav;
