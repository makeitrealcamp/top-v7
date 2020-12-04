import React from 'react'

export class Book extends React.Component {
  render() {
    const { title, description, votes } = this.props
    return (
      <div className="book" data-testid="book">
        <h2 className="book-title">{title}</h2>
        <span data-testid="votes">votes: {votes}</span>
        <p>{description}</p>
      </div>
    )
  }
}
