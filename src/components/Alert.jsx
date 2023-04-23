import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Alert.css';

const Alert = ({ alert }) => {
  const { isSuccess, message, isLoading } = alert;
  const type = 'info';

  const showToast = () => {
    const toastOptions = {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      newestOnTop: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      bodyClassName: 'custom-toast-body',
      className: '',
    };

    if (isLoading) {
      toastOptions.type = 'info';
      toastOptions.className = 'toast-loading';
      toastOptions.toastId = 'loading-toast';
    } else if (isSuccess) {
      toast.dismiss('loading-toast');
      toastOptions.type = 'success';
      toastOptions.className = 'toast-success';
    } else {
      toastOptions.type = 'error';
      toastOptions.className = 'toast-error';
    }

    toast[type](message, toastOptions);
  };

  React.useEffect(() => {
    showToast();
  }, [alert.message]);

  return null;
};

export default Alert;
