/** @format */

import { fireEvent, render, screen } from '@testing-library/react';
import Counter from '../components/Counter';
import '@testing-library/jest-dom';

test('Counter component is rendered', () => {
  render(<Counter />);

  const btn = screen.getByText('Count');

  expect(btn).toBeInTheDocument();
});




test('Check event click button', async () => {
  render(<Counter />);

  const btn = screen.getByText('Count');

  //-----------------
  await fireEvent.click(btn);

  const count = screen.getByText('1');

  expect(count.textContent).toContain('1');
});
