import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { createRoot } from 'react-dom/client';

test('renders logo', () => {
  const container = document.getElementById('root');
  if (!container) return;
  createRoot(container).render(<App />);
  const img = screen.getByRole('img');
  expect(img).toBeInTheDocument();
});
