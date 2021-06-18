import ShortenLinkForm from './shorten-link-form/ShortenLinkForm';
import ShortenedLinks from './shortened-links/ShortenedLinks';

import classes from './ShortenLinks.module.scss';

type ShortenLinksProps = {
  className?: string;
};

const ShortenLinks = ({ className = '' }: ShortenLinksProps) => {
  return (
    <section className={`${className} ${classes.shortenLinks}`}>
      <ShortenLinkForm className={classes.shortenLinkForm} />
      <ShortenedLinks className={classes.shortenedLinks} />
      <div className={classes.background}></div>
    </section>
  );
};

export default ShortenLinks;
