const { 
    getAllTask, 
    createNewTask, 
    getSingleTask, 
    updateTask, 
    deleteTask 
} = require('../controller/task.controller');

const router = require('express').Router();

router.route('/')
      .get(getAllTask)
      .post(createNewTask);

      
router.route('/:id')
      .get(getSingleTask)
      .patch(updateTask)
      .delete(deleteTask);

module.exports = router;