import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import App from './App'

describe('App', () => {
  afterEach(() => {
    cleanup()
  })

  it('should create a new book', () => {
    const book = {
      title: 'title',
      description: 'description',
    }
    const { getByLabelText, getByTestId, getAllByTestId } = render(<App />)

    const titleInput = getByLabelText('Title')
    fireEvent.change(titleInput, { target: { value: book.title } })

    const descriptionInput = getByLabelText('Description')
    fireEvent.change(descriptionInput, { target: { value: book.description } })

    const buttonElement = getByTestId('button')
    fireEvent.click(buttonElement)

    const books = getAllByTestId('book')

    expect(books).toHaveLength(1)
  })
})
