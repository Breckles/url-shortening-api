import { ShortcodeLink } from '../ShortcodeLink.model';

import ShortenedLink from './shortened-link/ShortenedLink';

import classes from './ShortenedLinks.module.scss';

type ShortenedLinksProps = {
  links: ShortcodeLink[];
  className?: string;
};

const ShortenedLinks = ({ links, className = '' }: ShortenedLinksProps) => {
  const listItems = links.map((link) => (
    <li key={link.code}>
      <ShortenedLink
        url={link.original_link}
        shortenedURL={link.full_short_link}
      />
    </li>
  ));

  return (
    <ul className={`${className} ${classes.shortenedLinks}`}>{listItems}</ul>
  );
};

export default ShortenedLinks;
