import { render, cleanup } from '@testing-library/react';
import App from './App';

describe('App', () => {
  // afterEach()
  beforeEach(() => {
    cleanup()
  })
  // afterAll()
  // beforeAll()

  test('renders learn react link', () => {
    const {
      // debug,
      // getByLabelText,
      getByText,
    } = render(<App />);

    // debug()
    // const passwordInput = getByLabelText('password')
    const linkElement = getByText(/learn react/i);
    // console.log(linkElement)
    expect(linkElement).toBeInTheDocument();
  });
})
