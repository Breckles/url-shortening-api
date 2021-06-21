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
    if (navigator.userAgent.match(/ipad|iphone/i)) {
      // handle copying for ios devices
      const textArea = document.createElement(
        'textarea'
      ) as HTMLTextAreaElement;
      textArea.readOnly = true;
      textArea.contentEditable = 'true';
      textArea.value = shortenedURL;
      document.body.appendChild(textArea);

      const range = document.createRange();
      range.selectNodeContents(textArea);
      const selection = window.getSelection()!;
      selection.removeAllRanges();
      selection.addRange(range);
      textArea.setSelectionRange(0, 999999);
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setIsCopied(true);
    } else {
      navigator.clipboard.writeText(shortenedURL).then(() => {
        setIsCopied(true);
      });
    }
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
