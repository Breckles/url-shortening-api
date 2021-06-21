import { useState, useEffect } from 'react';

import { ShortcodeLink } from './ShortcodeLink.model';

import ShortenLinkForm from './shorten-link-form/ShortenLinkForm';
import ShortenedLinks from './shortened-links/ShortenedLinks';

import classes from './ShortenLinks.module.scss';

type ShortenLinksProps = {
  className?: string;
};

const ShortenLinks = ({ className = '' }: ShortenLinksProps) => {
  const [shortenedLinks, setShortenedLinks] = useState<ShortcodeLink[]>([]);

  useEffect(() => {
    const storedLinks = sessionStorage.getItem('shortenedLinks');

    if (storedLinks) {
      const shortenedLinks = JSON.parse(storedLinks) as ShortcodeLink[];
      setShortenedLinks(shortenedLinks);
    }
  }, []);

  const onAddShortenedLink = (link: ShortcodeLink) => {
    setShortenedLinks((currentList: ShortcodeLink[]) => {
      const newList = [...currentList];
      newList.unshift(link);
      sessionStorage.setItem('shortenedLinks', JSON.stringify(newList));
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
