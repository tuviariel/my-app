import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders send button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/send/i);
  expect(buttonElement).toBeDisabled();
});
test('input', () => {
  render(<App />);
  const inputElement = screen.findByPlaceholderText(/Type your question here.../i);
  expect(inputElement).toBeInTheDocument();
  
});