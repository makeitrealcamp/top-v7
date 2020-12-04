import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Books } from '.'

const books = [
  {
    id: 1,
    title: 'title 1',
    description: 'description 1',
    votes: 10,
  },
  {
    id: 2,
    title: 'title 2',
    description: 'description 2',
    votes: 20,
  },
  {
    id: 3,
    title: 'title 3',
    description: 'description 3',
    votes: 30,
  },
  {
    id: 4,
    title: 'title 4',
    description: 'description 4',
    votes: 40,
  },
];

describe('Books', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render a list of books', () => {
    const { getAllByTestId } = render(<Books books={books} />)

    expect(getAllByTestId('book')).toHaveLength(books.length)
  })

  it('should render message if there are no books', () => {
    const { getByText } = render(<Books books={[]} />)

    expect(getByText('No books created!')).toBeInTheDocument()
  })
})
