import ShortenedLink from './shortened-link/ShortenedLink';

import classes from './ShortenedLinks.module.scss';

type ShortenedLinksProps = {
  className?: string;
};

const ShortenedLinks = ({ className = '' }: ShortenedLinksProps) => {
  return (
    <ul className={`${className} ${classes.shortenedLinks}`}>
      <li>
        <ShortenedLink
          url="https://www.frontendmentor.io"
          shortenedURL="https://rel.ink/k4lKyk"
        />
      </li>
    </ul>
  );
};

export default ShortenedLinks;
