/** @format */

import { fireEvent, render, screen } from '@testing-library/react';
import LoginForm from '../components/LoginForm';

test('Không nhập username', () => {
  render(<LoginForm />);
  const inputPassword = screen.getByLabelText('Mật khẩu');
  const btnSubmit = screen.getByText('Đăng nhập');
  fireEvent.change(inputPassword, { target: { value: '123456' } });
  fireEvent.click(btnSubmit);
  const error = screen.queryByText('Vui lòng nhập username');
  expect(error).toBeInTheDocument();
});
test('Không nhập mật khẩu', () => {
  render(<LoginForm />);
  const inputUsername = screen.getByLabelText('Tên đăng nhập');
  // const inputPassword = screen.getByLabelText('Mật khẩu');
  const btnSubmit = screen.getByText('Đăng nhập');
  fireEvent.change(inputUsername, { target: { value: '123456' } });
  fireEvent.click(btnSubmit);
  const error = screen.queryByText('Vui lòng nhập mật khẩu');
  expect(error).toBeInTheDocument();
});
test('Tên đăng nhập hoặc mật khaaue không chính xác', () => {
  render(<LoginForm />);
  const inputUsername = screen.getByLabelText('Tên đăng nhập');
  const inputPassword = screen.getByLabelText('Mật khẩu');
  const btnSubmit = screen.getByText('Đăng nhập');
  fireEvent.change(inputUsername, { target: { value: 'adminđsa' } });
  fireEvent.change(inputPassword, { target: { value: '12345622' } });
  fireEvent.click(btnSubmit);
  const error = screen.queryByText(
    'Tên đăng nhập hoặc mật khẩu không chính xác'
  );
  expect(error).toBeInTheDocument();
});
