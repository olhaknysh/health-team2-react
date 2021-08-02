import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';
import { CSSTransition } from 'react-transition-group';
const modalRoot = document.getElementById('root-modal');
const Modal = ({ onClose, children }) => {
  console.log(onClose);
  useEffect(() => {
    const handlekeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handlekeyDown);
    return () => window.removeEventListener('keydown', handlekeyDown);
  }, [onClose]);

  const handleBackdropClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <CSSTransition in={onClose} timeout={5000}>
      <div onClick={handleBackdropClick} className={styles.Overlay}>
        <div className={styles.Modal}>{children}</div>
      </div>
    </CSSTransition>,
    modalRoot,
  );
};

export default Modal;
