import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({message, variant, handleDismiss}) {
  return (
    <ol className={styles.wrapper}>
      <li className={styles.toastWrapper}>
        <Toast message={message} variant={variant} handleDismiss={handleDismiss} />
      </li>
      <li className={styles.toastWrapper}>
      <Toast message={message} variant={variant} handleDismiss={handleDismiss} />
      </li>
    </ol>
  );
}

export default ToastShelf;


// map over toast array
