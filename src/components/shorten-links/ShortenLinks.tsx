import classes from './ShortenLinks.module.scss';

type ShortenLinksProps = {
  className?: string;
};

const ShortenLinks = ({ className = '' }: ShortenLinksProps) => {
  return <section className={`${className} ${classes.shortenLinks}`}></section>;
};

export default ShortenLinks;
