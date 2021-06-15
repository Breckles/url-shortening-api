import { ReactNode, Fragment } from 'react';
import { createPortal } from 'react-dom';

import classes from './Modal.module.scss';

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
  className?: string;
};

type BackdropProps = {
  onClose: () => void;
};

type ModalOverlayProps = {
  children: ReactNode;
};

const Backdrop = ({ onClose }: BackdropProps) => {
  return <div className={classes.backdrop} onClick={onClose}></div>;
};

const ModalOverlay = ({ children }: ModalOverlayProps) => {
  return <div className={classes.modal}>{children}</div>;
};

const portalElement = document.getElementById('overlays')!;

const Modal = ({ onClose, children }: ModalProps) => {
  return createPortal(
    <Fragment>
      <Backdrop onClose={onClose} />
      <ModalOverlay>{children}</ModalOverlay>
    </Fragment>,
    portalElement
  );
};

export default Modal;
