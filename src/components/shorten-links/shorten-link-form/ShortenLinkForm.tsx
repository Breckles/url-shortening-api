import classes from './ShortenLinkForm.module.scss';

type ShortenLinkFormProps = {
  className?: string;
};

const ShortenLinkForm = ({ className = '' }: ShortenLinkFormProps) => {
  return (
    <form className={`${className} ${classes.form}`}>
      <input
        id="link"
        type="text"
        placeholder="Shorten a link here..."
        aria-label="Shorten a link here"
        title="Shorten a link here"
      />
      <button type="submit">Shorten It!</button>
    </form>
  );
};

export default ShortenLinkForm;
