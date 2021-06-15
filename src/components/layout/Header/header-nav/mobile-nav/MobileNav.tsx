import RoundedSidesButton from '../../../../ui/buttons/RoundedSidesButton';
import Modal from '../../../../ui/modal/Modal';

import classes from './MobileNav.module.scss';

type MobileNavProps = {
  onClose: () => void;
};

const MobileNav = ({ onClose }: MobileNavProps) => {
  return (
    <Modal onClose={onClose}>
      <nav className={classes.mobileNav}>
        <div>
          <a href="/">Features</a>
          <a href="/">Pricing</a>
          <a href="/">Resources</a>
        </div>
        <div className={classes.divider}></div>
        <div>
          <a href="/">Login</a>
          <a href="/">
            <RoundedSidesButton>Sign Up</RoundedSidesButton>
          </a>
        </div>
      </nav>
    </Modal>
  );
};

export default MobileNav;
