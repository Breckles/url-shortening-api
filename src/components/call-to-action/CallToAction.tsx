import RoundedSidesButton from '../ui/buttons/RoundedSidesButton';

import classes from './CallToAction.module.scss';

type CallToActionProps = {
  className?: string;
};

const CallToAction = ({ className = '' }: CallToActionProps) => {
  return (
    <div className={`${className} ${classes.callToAction}`}>
      <h3>Boost your links today</h3>
      <RoundedSidesButton className={classes.button}>
        Get Started
      </RoundedSidesButton>
    </div>
  );
};

export default CallToAction;
