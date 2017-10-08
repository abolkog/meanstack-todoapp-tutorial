/**
 * @Author: Khalid Elshafie <khalid>
 * @Date:   2017-09-30T21:52:25+09:00
 * @Email:  Khalid@abolkog.com
 */

const express = require('express');
const router = express.Router();
const passport = require('passport');
const Task = require('../models/task');

//Add New Task(Todo)
router.post('/add', passport.authenticate('jwt', { session : false}),  (req, res, next) => {
    const task = new Task({
      name: req.body.name,
      done: req.body.done,
      owner: req.body.owner
    });

    task.save((err, task) => {
      if (err) {
        // throw err;
        return res.send({
          success: false,
          message: 'Error while saving, pelase try again'
        });
      }

      return res.send({
        success: true,
        task,
        message: 'Task Saved'
      });

    });
});

//List Own Tasks
router.post('/list', passport.authenticate('jwt', { session : false}), (req, res, next) => {
  const owner = req.body.owner;
  Task.find({ owner }, (err, tasks)=>{
    if (err) {
      return res.send({
        success: false,
        message: 'Error while reteriving the tasks'
      });
    }

    return res.send({
      success: true,
      tasks
    });
  });
});

//Delete Task
router.delete('/remove/:id', passport.authenticate('jwt', { session : false}), (req, res, next) => {

  //TODO: Validate if the the task belongs to the person deleting it (check owner)

  const taskId = req.params.id;
  Task.remove({ _id: taskId }, (err) => {
      if(err) {
        return res.send({
          success: false,
          message: 'Failed to delete the task'
        });
      }

      return res.send({
        success: true,
        message: 'Task deleted'
      });
  });
});

module.exports = router;
