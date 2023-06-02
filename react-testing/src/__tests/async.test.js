/** @format */

import { render, screen, waitFor } from '@testing-library/react';
import AsyncTesting from '../components/Practice-4/AsyncTesting';
const handleFetchAPI = jest.fn();

test('Check Async Component fetch', async () => {
  handleFetchAPI.mockResolvedValueOnce('Async Testing');
  render(<AsyncTesting />);
  const loadingDOM = await screen.findByText('Loading');
  expect(loadingDOM).toBeVisible();
  await waitFor(() => expect(loadingDOM).toBeVisible());
  expect(handleFetchAPI).toHaveBeenCalledTimes(0);
  const resultDOM = screen.getByTestId('async-data');
  expect(resultDOM.textContent).toEqual('Async Testing');
  expect(resultDOM.textContent).not.toEqual('Hellow World');
});
