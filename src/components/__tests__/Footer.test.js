import { render } from '@testing-library/react';
import { Footer } from '../Footer';

it('renders footer component', () => {
  const { getByText } = render(<Footer />);

  const footerText = getByText(/Stonks inc. 2024/i)
  expect(footerText).toBeInTheDocument()
});
