import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import SortBy from './SortBy';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

vi.mock('@/constants/sortOptions', () => ({
  SORT_OPTIONS: [
    { name: 'цене', sortProperty: 'price' },
    { name: 'популярности', sortProperty: 'rating' },
    { name: 'алфавиту', sortProperty: 'title' },
  ],
}));

describe('SortBy component', () => {
  it('renders SortBy', () => {
    render(<Provider store={store}><MemoryRouter><SortBy /></MemoryRouter></Provider>);
    expect(screen.getByText('цене')).toBeInTheDocument();
    expect(screen.getByText(/Сортировать по/i)).toBeInTheDocument();
  });

  it('SortBy onClick', async () => {
    render(<Provider store={store}><MemoryRouter><SortBy /></MemoryRouter></Provider>);
    await userEvent.click(screen.getByText('цене'));
    expect(screen.getByText('популярности')).toBeInTheDocument();
    expect(screen.getByText('алфавиту')).toBeInTheDocument();
    await userEvent.click(screen.getByText('популярности'));
    expect(screen.queryByText('алфавиту')).not.toBeInTheDocument();
  });
});