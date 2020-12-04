import React from 'react'
import { render } from '@testing-library/react'
import { Book } from './Book'

describe('Book', () => {
  it('should render correctly', () => {
    const mockData = {
      title: 'title 1',
      description: 'description 1',
      votes: 0
    }

    const { getByTestId, getByText } = render(
      <Book
        title={mockData.title}
        description={mockData.description}
        votes={mockData.votes}
      />
    );

    expect(getByText(mockData.title)).toBeInTheDocument()
    expect(getByText(mockData.title).tagName).toBe('H2')
    expect(getByText(mockData.description)).toBeInTheDocument()
    expect(getByText(mockData.description).tagName).toBe('P')
    expect(getByTestId('votes')).toBeInTheDocument()
  })
})
