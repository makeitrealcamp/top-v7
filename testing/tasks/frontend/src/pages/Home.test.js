import React from 'react'
import { render, cleanup } from '@testing-library/react'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import Home from './Home'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('Home', () => {
  afterEach(() => {
    cleanup()
  })

  it('should match snapshot', () => {
    const store = mockStore({
      tasksReducer: {
        tasks: []
      }
    })

    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    )

    expect(container).toMatchSnapshot()
  })
})
