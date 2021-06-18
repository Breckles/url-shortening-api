import HeroImage from '../components/hero-image/HeroImage';
import ShortenLinks from '../components/shorten-links/ShortenLinks';
import SellingPoints from '../components/selling-points/SellingPoints';
import CallToAction from '../components/call-to-action/CallToAction';

import classes from './LandingPage.module.scss';

const LandingPage = () => {
  return (
    <div className={classes.landingPage}>
      <HeroImage className={classes.heroImage} />
      <ShortenLinks className={classes.shortenLinks} />
      <SellingPoints className={classes.sellingPoints} />
      <CallToAction className={classes.callToAction} />
    </div>
  );
};

export default LandingPage;
