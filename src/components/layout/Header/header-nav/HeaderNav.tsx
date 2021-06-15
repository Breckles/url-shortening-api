import { useState } from 'react';

import MobileNav from './mobile-nav/MobileNav';
import RoundedSidesButton from '../../../ui/buttons/RoundedSidesButton';

import hamburgerIcon from '../../../../assets/images/hamburger.svg';

import classes from './HeaderNav.module.scss';

type HeaderNavProps = {
  className?: string;
};

const HeaderNav = ({ className }: HeaderNavProps) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleShowMobileMenuHandler = () => {
    setShowMobileMenu((prevState) => !prevState);
  };

  return (
    <div className={`${className || ''} ${classes.headerNav}`}>
      <button type="button" onClick={toggleShowMobileMenuHandler}>
        <img src={hamburgerIcon} alt="The Menu Icon" />
      </button>
      {showMobileMenu && <MobileNav />}
      <nav>
        <div>
          <a href="/">Features</a>
          <a href="/">Pricing</a>
          <a href="/">Resources</a>
        </div>
        <div>
          <a href="/">Login</a>
          <a href="/">
            <RoundedSidesButton>Sign Up</RoundedSidesButton>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default HeaderNav;
