import { useState } from 'react';

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
  const [isCopied, setIsCopied] = useState(false);

  const copyShortenedLinkHandler = () => {
    navigator.clipboard.writeText(shortenedURL).then(() => {
      setIsCopied(true);
    });
  };

  return (
    <div className={`${className} ${classes.shortenedLink}`}>
      <span className={classes.longURL}>{url}</span>
      <div className={classes.separator}></div>
      <span className={classes.shortURL}>{shortenedURL}</span>
      <span>
        <RoundedCornersButton
          className={`${classes.button} ${isCopied && classes.copied}`}
          onClick={copyShortenedLinkHandler}
        >
          {isCopied ? 'Copied!' : 'Copy'}
        </RoundedCornersButton>
      </span>
    </div>
  );
};

export default ShortenedLink;
