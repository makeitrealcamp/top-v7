import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios'
import {
  getTasks,
  GET_TASKS,
  createTask,
  CREATE_TASK,
  completeTask,
  COMPLETE_TASK,
  tasksReducer,
  initialState
} from './tasksReducer'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const mockTasks = [
  { _id: 'asdkriwehrjksadhf', name: 'task 1', done: false },
  { _id: 'saditjkfhkjsfjhsd', name: 'task 2', done: true },
  { _id: 'fsdjhfsghertjdhfh', name: 'task 3', done: false },
]

describe('tasksReducer', () => {
  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it(
    'should request tasks and dispatch GET_TASKS action with response payload',
    async () => {
      const { dispatch, getActions } = mockStore()

      getTasks()(dispatch)

      await moxios.wait(jest.fn)
      const req = moxios.requests.mostRecent()
      await req.respondWith({
        status: 200,
        response: mockTasks
      })

      const actions = getActions()

      expect(actions[0].type).toBe(GET_TASKS)
      expect(actions[0].payload).toMatchObject(mockTasks)
    }
  )

  it(
    'should create task and dispatch CREATE_TASK action with payload',
    async () => {
      const { dispatch, getActions } = mockStore()

      createTask({ name: 'task4' })(dispatch)

      await moxios.wait(jest.fn)
      const req = moxios.requests.mostRecent()
      await req.respondWith({
        status: 200
      })

      const actions = getActions()

      expect(actions[0].type).toBe(CREATE_TASK)
      expect(actions[0].payload).toMatch(/task created successfully/i)
    }
  )

  it(
    'should complete task and dispatch COMPLETE_TASK action with payload',
    async () => {
      const { dispatch, getActions } = mockStore()

      completeTask('asdkriwehrjksadhf')(dispatch)

      await moxios.wait(jest.fn)
      const req = moxios.requests.mostRecent()
      await req.respondWith({
        status: 200,
        response: mockTasks[0]
      })

      const actions = getActions()

      expect(actions[0].type).toBe(COMPLETE_TASK)
      expect(actions[0].payload).toMatchObject(mockTasks[0])
    }
  )

  it(
    'should return initialState by default if invalid action',
    () => {
      const state = tasksReducer(undefined, { type: 'INVALID' })
      expect(state).toMatchObject(initialState)
    }
  )

  it(
    'should add tasks when GET_TASKS action is dispatched',
    () => {
      const state = tasksReducer(undefined, { type: GET_TASKS, payload: mockTasks })
      expect(state).toMatchObject({ ...initialState, tasks: mockTasks })
    }
  )
})
