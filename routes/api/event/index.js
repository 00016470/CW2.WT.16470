const express = require('express');
const { validationResult } = require('express-validator');
const { addEventValidation, deleteEventValidation, updateEventValidation } = require('../../../validators/event');

const router = express.Router();
const event_controller = require('../../../controllers/api/event');

// Define API routes
router.get('/', (req, res)=>{
    event_controller.getAll(req, res);
});
//validation for create
router.post('/', addEventValidation(), (req, res)=>{
     
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    event_controller.create(req, res)
})
//validation for update
router.put('/:id', updateEventValidation(), (req, res)=>{
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
    
      event_controller.update(req, res)
    })
//validation for delete    
router.delete('/:id', deleteEventValidation(), (req, res, next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
      }
    
    event_controller.delete(req, res)
    })
    

module.exports = router
