const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
  name: String
}, {
  timestamps: true,
});

const Task = model('Task', taskSchema);

module.exports = Task;
