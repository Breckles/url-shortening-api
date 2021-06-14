import hamburgerIcon from '../../../../assets/images/hamburger.svg';

import classes from './HeaderNav.module.scss';

type HeaderNavProps = {
  className?: string;
};

const onNavigate = (event: Event) => {
  event.preventDefault();
};

const HeaderNav = ({ className }: HeaderNavProps) => {
  return (
    <div className={`${className || ''} ${classes.headerNav}`}>
      <img
        className={classes.hamburgerIcon}
        src={hamburgerIcon}
        alt="The Menu Icon"
      />
      <nav className={`${className || ''} ${classes.nav}`}>
        <div>
          <a href="/">Features</a>
          <a href="/">Pricing</a>
          <a href="/">Resources</a>
        </div>
        <div>
          <a href="/">Login</a>
          <a href="/">Sign Up</a>
        </div>
      </nav>
    </div>
  );
};

export default HeaderNav;
