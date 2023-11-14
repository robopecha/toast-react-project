import React from 'react';

export const ToastContext = React.createContext();

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastProvider({children}) {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [toasts, setToasts] = React.useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    setToasts([...toasts, { id: crypto.randomUUID(), message, variant }]);
    setMessage('');
    setVariant(VARIANT_OPTIONS[0]);
  };

  function handleDismiss(id) {
    setToasts([...toasts].filter(toast => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{message, setMessage, variant, setVariant, toasts, handleSubmit, handleDismiss}}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
