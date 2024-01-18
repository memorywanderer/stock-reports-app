import { render } from '@testing-library/react'
import { Header } from '../Header'

it('renders header component', () => {
  const { getByText } = render(<Header />);

  const headerText = getByText(/Stonks inc./i)
  expect(headerText).toBeInTheDocument()
});
