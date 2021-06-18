import { useRef, Fragment, FormEvent } from 'react';

import LoadingSpinner from '../../ui/spinners/LoadingSpinner';
import RoundedCornersButton from '../../ui/buttons/RoundedCornersButton';

import classes from './ShortenLinkForm.module.scss';

type ShortenLinkFormProps = {
  className?: string;
};

const ShortenLinkForm = ({ className = '' }: ShortenLinkFormProps) => {
  const linkInputRef = useRef<HTMLInputElement>(null);

  const isLoading = false;

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredURL = linkInputRef.current!.value;
    console.log(enteredURL);
  };

  let content = (
    <Fragment>
      <input
        type="text"
        placeholder="Shorten a link here..."
        aria-label="Shorten a link here"
        title="Shorten a link here"
        ref={linkInputRef}
      />
      <RoundedCornersButton className={classes.button} type="submit">
        Shorten It!
      </RoundedCornersButton>
    </Fragment>
  );

  if (isLoading) {
    content = <LoadingSpinner />;
  }

  return (
    <form className={`${className} ${classes.form}`} onSubmit={submitHandler}>
      {content}
    </form>
  );
};

export default ShortenLinkForm;
