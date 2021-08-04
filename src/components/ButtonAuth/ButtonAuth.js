import React from 'react';
import styles from './ButtonAuth.module.scss';

const ButtonAuth = ({ view, children, disabled=false }) => {
  return (
    <>
      {view !== 'btnReg' ? (
        <button type="submit" className={styles.button} disabled={disabled}>
          {children}
        </button>
      ) : (
        <button type="button" className={styles.buttonViewReg} disabled={disabled}>
          {children}
        </button>
      )}
    </>
  );
};

export default ButtonAuth;