import { render, cleanup, act } from '@testing-library/react';
import moxios from 'moxios'
import App from './App';

const posts = [
  {
    id: 1,
    title: 'title 1',
    body: 'body 1'
  },
  {
    id: 2,
    title: 'title 2',
    body: 'body 2'
  },
  {
    id: 3,
    title: 'title 3',
    body: 'body 3'
  },
];

describe('App', () => {
  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
    cleanup()
  })

  it('should request and render a list of posts', async () => {
    const { getAllByTestId } = render(<App />)

    await moxios.wait(jest.fn)
    await act(async () => {
      const req = moxios.requests.mostRecent()

      req.respondWith({
        status: 200,
        response: posts
      })
    });

    const items = getAllByTestId('post')
    expect(items).toHaveLength(posts.length)
  })

  it('should request and render error', async () => {
    const { getByText } = render(<App />)

    await moxios.wait(jest.fn)
    await act(async () => {
      const req = moxios.requests.mostRecent()

      req.respondWith({
        status: 400,
        response: { message: 'something went wrong' }
      })
    });

    const item = getByText(/something went wrong/i)
    expect(item).toBeInTheDocument()
  })
})

