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
      toastOptions.autoClose = '20000';
      toastOptions.hideProgressBar = true;
    } else if (isSuccess) {
      toast.dismiss('loading-toast');
      toastOptions.type = 'success';
      toastOptions.className = 'toast-success';
      toastOptions.autoClose = '3000';
      toastOptions.hideProgressBar = false;
    } else {
      toastOptions.type = 'error';
      toastOptions.className = 'toast-error';
      toastOptions.autoClose = '3000';
      toastOptions.hideProgressBar = false;
    }

    toast[type](message, toastOptions);
  };

  React.useEffect(() => {
    showToast();
  }, [alert.message]);

  return null;
};

export default Alert;
