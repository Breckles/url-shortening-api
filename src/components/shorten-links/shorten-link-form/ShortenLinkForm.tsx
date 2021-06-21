import { useState, useRef, Fragment, FormEvent } from 'react';

import useHttp from '../../../hooks/use-http';

import { ShortcodeLink } from '../ShortcodeLink.model';
import { ShortCodeResponse } from '../ShortcodeResponse.model';

import LoadingSpinner from '../../ui/spinners/LoadingSpinner';
import RoundedCornersButton from '../../ui/buttons/RoundedCornersButton';

import classes from './ShortenLinkForm.module.scss';

type ShortenLinkFormProps = {
  onAddShortenedLink: (link: ShortcodeLink) => void;
  className?: string;
};

const ShortenLinkForm = ({
  onAddShortenedLink,
  className = '',
}: ShortenLinkFormProps) => {
  const [inputError, setInputError] = useState<string | null>(null);
  const { isLoading, sendRequest: getShortenedLink } =
    useHttp<ShortCodeResponse>(true);

  const linkInputRef = useRef<HTMLInputElement>(null);

  const createShortenedLink = (data: ShortCodeResponse) => {
    if (!data.ok) {
      console.log(data);
    }

    const newShortenedLink: ShortcodeLink = {
      full_short_link: data.result.full_short_link,
      original_link: data.result.original_link,
    };

    onAddShortenedLink(newShortenedLink);
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    setInputError(null);

    const linkInputEl = linkInputRef.current!;
    let errorMessage = null;

    if (linkInputEl.validity.valid) {
      // Send Http request
      const enteredURL = linkInputEl.value;

      getShortenedLink({
        url: `https://api.shrtco.de/v2/shorten?url=${enteredURL}`,
        successCallback: createShortenedLink,
      });
    } else {
      errorMessage = 'Something unknown went wrong';

      // Field is empty
      if (linkInputEl.validity.valueMissing) {
        errorMessage = 'Please add a link';
      }

      // Input is NOT valid URL
      if (linkInputEl.validity.typeMismatch) {
        errorMessage = 'Please enter a valid URL';
      }

      setInputError(errorMessage);
    }
  };

  let content = (
    <Fragment>
      <input
        className={inputError ? classes.error : ''}
        type="url"
        placeholder="Shorten a link here..."
        aria-label="Shorten a link here"
        title="Shorten a link here"
        ref={linkInputRef}
        required
      />
      {inputError && <span className={classes.errorText}>{inputError}</span>}
      <RoundedCornersButton className={classes.button} type="submit">
        Shorten It!
      </RoundedCornersButton>
    </Fragment>
  );

  if (isLoading) {
    content = <LoadingSpinner />;
  }

  return (
    <form
      className={`${className} ${classes.form}`}
      onSubmit={submitHandler}
      noValidate
    >
      <input
        className={inputError ? classes.error : ''}
        type="url"
        placeholder="Shorten a link here..."
        aria-label="Shorten a link here"
        title="Shorten a link here"
        ref={linkInputRef}
        required
      />
      {inputError && <span className={classes.errorText}>{inputError}</span>}
      <RoundedCornersButton className={classes.button} type="submit">
        Shorten It!
      </RoundedCornersButton>
      {isLoading && <LoadingSpinner className={classes.loadingSpinner} />}
    </form>
  );
};

export default ShortenLinkForm;
