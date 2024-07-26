import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

test('mostrat 6 productos por default', async () => {
  render(<App />);

  const titles = await screen.findAllByRole('heading');
  expect(titles).toHaveLength(6);
});

test('click en boton load more y mostrar 6 productos más en pantalla', async () => {
  render(<App />);
  const button = await screen.findByRole('button', {
    name: /load more/i,
  });
  user.click(button);

  await waitFor(async () => {
    const titles = await screen.findAllByRole('heading');
    expect(titles).toHaveLength(12);
  });
});
