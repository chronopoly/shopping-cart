import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Counter from './Counter';

describe('Counter component', () => {
  it('if component renders', () => {
    render(
      <MemoryRouter>
        <Counter quantity={1} setQuantity={() => null} />
      </MemoryRouter>
    );
      expect(screen.getByRole('textbox')).toBeInTheDocument()
  });

  it('renders correct starting value', () => {
    render(
      <MemoryRouter>
        <Counter quantity={1} setQuantity={() => null} />
      </MemoryRouter>
    );
    expect(screen.getByRole('textbox').value).toBe("1");
  })
});