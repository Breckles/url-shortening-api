import RoundedCornersButton from '../../../ui/buttons/RoundedCornersButton';

import classes from './ShortenedLink.module.scss';

type ShortenedLinkProps = {
  url: string;
  shortenedURL: string;
  className?: string;
};

const ShortenedLink = ({
  url,
  shortenedURL,
  className = '',
}: ShortenedLinkProps) => {
  return (
    <div className={classes.shortenedLink}>
      <span className={classes.longURL}>{url}</span>
      <div className={classes.separator}></div>
      <span className={classes.shortURL}>{shortenedURL}</span>
      <span>
        <RoundedCornersButton className={classes.button}>
          Copy
        </RoundedCornersButton>
      </span>
    </div>
  );
};

export default ShortenedLink;
