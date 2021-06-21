import classes from './LoadingSpinner.module.scss';

type LoadingSpinnerProps = {
  className?: string;
};

const LoadingSpinner = ({ className }: LoadingSpinnerProps) => {
  return (
    <div className={`${className} ${classes.spinnerContainer}`}>
      <div className={classes['lds-default']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={classes.background}></div>
    </div>
  );
};

export default LoadingSpinner;
