import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toasts, handleDismiss}) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map(toast =>
        <li className={styles.toastWrapper} key={toast.id}>
          <Toast message={toast.message} variant={toast.variant} id={toast.id} handleDismiss={handleDismiss} />
        </li>
      )}
    </ol>
  );
}

export default ToastShelf;
