import React from 'react';
import { render, screen } from '@testing-library/react';
import CardTriage from './CardTriage';

test('renders learn react link', () => {
  render(<CardTriage />);
  const CardViewPage = screen.getByTestId('CardViewPage');
  expect(CardViewPage).toBeInTheDocument();
});
