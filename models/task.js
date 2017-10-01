/**
 * @Author: Khalid Elshafie <khalid>
 * @Date:   2017-09-30T21:50:28+09:00
 * @Email:  Khalid@abolkog.com
 */

const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
  name: { type: String, required: true },
  done: { type: Boolean },
  owner: { type: String, required: true }
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
