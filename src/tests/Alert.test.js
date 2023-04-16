import React from 'react';
import { render, screen } from '@testing-library/react';
import Alert from '../components/Alert';

describe('Alert Component', () => {
  const alert = {
    message: '',
    isSuccess: false,
    isLoading: false,
  };

  it('When isLoading === true, renders "Loading..."', () => {
    alert.message = 'Loading...';
    alert.isLoading = true;

    render(<Alert alert={alert} />);
    const alertElement = screen.getByText(/Loading.../i);
    expect(alertElement).toBeInTheDocument();
  });

  it('On error with request, renders "Server Error. Please try again later."', () => {
    alert.message = 'Server Error. Please try again later.';

    render(<Alert alert={alert} />);
    const alertElement = screen.getByText(
      /Server Error. Please try again later./i
    );
    expect(alertElement).toBeInTheDocument();
  });

  it('When iproperty added to DB, renders "Property Added"', () => {
    alert.message = 'Property Added.';
    alert.isSuccess = true;

    render(<Alert alert={alert} />);
    const alertElement = screen.getByText(/Property Added./i);
    expect(alertElement).toBeInTheDocument();
  });
});
