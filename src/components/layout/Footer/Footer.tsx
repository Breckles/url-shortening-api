import classes from './Footer.module.scss';

type footerProps = {
  className?: string;
};

const Footer = ({ className }: footerProps) => {
  return (
    <footer className={`${className} ${classes.footer}`}>
      Footer Component
    </footer>
  );
};

export default Footer;
