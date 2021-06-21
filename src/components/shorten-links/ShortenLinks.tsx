import { useState } from 'react';

import { ShortcodeLink } from './ShortcodeLink.model';

import ShortenLinkForm from './shorten-link-form/ShortenLinkForm';
import ShortenedLinks from './shortened-links/ShortenedLinks';

import classes from './ShortenLinks.module.scss';

type ShortenLinksProps = {
  className?: string;
};

const ShortenLinks = ({ className = '' }: ShortenLinksProps) => {
  const [shortenedLinks, setShortenedLinks] = useState<ShortcodeLink[]>([
    {
      original_link: 'https://frontendmentor.io',
      full_short_link: 'https://rel.ink/k4lKyk',
    },
    {
      original_link: 'https://frontendmentor.io',
      full_short_link: 'https://rel.ink/k4lKyk',
    },
    {
      original_link: 'https://frontendmentor.io',
      full_short_link: 'https://rel.ink/k4lKyk',
    },
    {
      original_link: 'https://frontendmentor.io',
      full_short_link: 'https://rel.ink/k4lKyk',
    },
  ]);

  const onAddShortenedLink = (link: ShortcodeLink) => {
    setShortenedLinks((currentList: ShortcodeLink[]) => {
      const newList = [...currentList];
      newList.push(link);
      return newList;
    });
  };

  return (
    <section className={`${className} ${classes.shortenLinks}`}>
      <ShortenLinkForm
        className={classes.shortenLinkForm}
        onAddShortenedLink={onAddShortenedLink}
      />
      <ShortenedLinks
        className={classes.shortenedLinks}
        links={shortenedLinks}
      />
      <div className={classes.background}></div>
    </section>
  );
};

export default ShortenLinks;
