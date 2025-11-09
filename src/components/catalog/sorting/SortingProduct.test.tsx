import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import SortingProduct from './SortingProduct';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@/app/store/store';

vi.mock('@/constants/categories', () => ({
  CATEGORIES: ['Все', 'Мотоциклы', 'Мопеды', 'Скутеры'],
}));

describe('SortingProduct component', () => {
  it('renders SortingProduct', () => {
    render(<Provider store={store}><MemoryRouter><SortingProduct /></MemoryRouter></Provider>);
    expect(screen.getByRole('button', { name: 'Мотоциклы' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Все' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Все' }).className).toContain('active')
  });

  it('SortingProduct onClick', async () => {
    render(<Provider store={store}><MemoryRouter><SortingProduct /></MemoryRouter></Provider>);
    expect(screen.getByRole('button', { name: 'Мотоциклы' })).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', {name: 'Мотоциклы'}));
    expect(screen.getByRole('button', { name: 'Мотоциклы' }).className).toContain('active')
    await userEvent.click(screen.getByText('Мопеды'));
    expect(screen.getByRole('button', { name: 'Мопеды' }).className).toContain('active')
  });
});