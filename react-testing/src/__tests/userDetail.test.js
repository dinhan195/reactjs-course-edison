/** @format */

import { render, screen } from '@testing-library/react';
import UserDetail from '../components/UserDetail';
const info = {
  username: 'heyhey',
  email: 'abcd@gmail.com',
  phone: '99899999',
};

test('Check user detail', () => {
  render(<UserDetail info={info} />);
  const username = screen.queryByTestId('username');
  expect(username).toBeInTheDocument();
  const email = screen.queryByTestId('email');
  expect(email).toBeInTheDocument();
  const phone = screen.queryByTestId('phone');
  expect(phone).toBeInTheDocument();

  expect(username.textContent).toEqual('heyhey');
  expect(email.textContent).toEqual('abcd@gmail.com');
  expect(phone.textContent).toEqual('99899999');
});
