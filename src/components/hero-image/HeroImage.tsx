import RoundedSidesButton from '../ui/buttons/RoundedSidesButton';

import officeWorkerImage from '../../assets//images/illustration-working.svg';

import classes from './HeroImage.module.scss';

type HeroImageProps = {
  className?: string;
};

const HeroImage = ({ className = '' }: HeroImageProps) => {
  return (
    <section className={`${className} ${classes.heroImage}`}>
      {/* Leaving alt text empty because image is just decoration. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-alt */}
      <div className={classes.imageWrapper}>
        <img src={officeWorkerImage} alt="" />
      </div>
      <article>
        <h2>More than just shorter links</h2>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <RoundedSidesButton>Get Started</RoundedSidesButton>
      </article>
    </section>
  );
};

export default HeroImage;
