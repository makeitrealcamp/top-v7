const express = require('express');
const uuid = require('uuid-random');

const port = 8080;
const app = express();

app.use(express.json());

let tasks = [];

app.get('/', (req, res) => {
  res.send('hola mundo')
})

// CRUD
// Create - Read - Update - Delete

// GET /tasks
// GET /tasks/:taskId
// POST /tasks
// PUT /tasks/:taskId
// DELETE /tasks/:taskId

app.get('/tasks', (req, res) => {
  // console.log(req.query)
  res.status(200).json(tasks)
});

app.get('/tasks/:taskId', (req, res) => {
  const { taskId } = req.params;
  const task = tasks.filter(task => task.id === taskId)[0]

  if(!task) {
    res.status(404).json({ message: 'Task not found' })
    return;
  }

  res.status(200).json(task)
})

app.post('/tasks', (req, res) => {
  const { title } = req.body;

  const newTask = {
    id: uuid(),
    title,
    done: false,
  };

  tasks.push(newTask)

  res.status(201).json(newTask)
});

app.put('/tasks/:taskId', (req, res) => {
  const { taskId } = req.params;

  let updatedTask;
  tasks = tasks.map(task => {
    if(task.id !== taskId) {
      return task
    }

    updatedTask = {
      ...task,
      done: !task.done,
    }

    return updatedTask;
  })

  res.status(200).json(updatedTask)
})

app.delete('/tasks/:taskId', (req, res) => {
  const { taskId } = req.params;

  tasks = tasks.filter(task => task.id !== taskId);

  res.status(200).json({ message: 'OK' })
})

app.listen(
  port,
  () => console.log(`Successfully running at http://localhost:${port}`)
);
