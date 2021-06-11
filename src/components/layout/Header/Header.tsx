import HeaderNav from './header-nav/HeaderNav';

import logo from '../../../assets/images/logo.svg';

import classes from './Header.module.scss';

type HeaderProps = {
  className?: string;
};

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={`${className || ''} ${classes.header}`}>
      <div className={classes.logo}>
        <img src={logo} alt="The Shortly Logo" />
      </div>
      <HeaderNav />
    </header>
  );
};

export default Header;
