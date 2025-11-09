import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Button } from './Button';

describe('Button component', () => {
  it('renders button with children', () => {
    render(<Button>Кнопка</Button>);
    const btn = screen.getByRole('button', { name: /Кнопка/i });
    expect(btn).toBeInTheDocument();
  });

  it('has default variant class and class primary', () => {
    render(<Button variant='primary'>Кнопка</Button>);
    const btn = screen.getByRole('button', { name: /Кнопка/i });
    expect(btn.className).toContain('btn');
    expect(btn.className).toContain('primary');
  });

  
  it('has default variant class and class secondary and prop isActive', () => {
    render(<Button variant='secondary' isActive>Кнопка</Button>);
    const btn = screen.getByRole('button', { name: /Кнопка/i });
    expect(btn.className).toContain('btn');
    expect(btn.className).toContain('secondary');
    expect(btn.className).toContain('active');
  });

  it('forwards other button props like onClick', async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const btn = screen.getByRole('button', { name: /click me/i });
    await userEvent.click(btn);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});