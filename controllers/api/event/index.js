// Require the event service module from the services directory
const event_service = require('../../../services/event')


const event_controller = {
    getAll(req, res) {
         // Call the event_service.getAll() method to retrieve all events
    // Respond with the retrieved events data in JSON format
        res.json(event_service.getAll())
    },
    // create new event
    create(req, res) {
        res.status(201).json(
        event_service.create(req, res))
    },
    //update existing event by id
    update(req, res) {
        const event = event_service.update(req.params.id, req.body)
        
        if (event) {
            res.json(event)
        } else {
            res.status(404).send('Event not found')
        }
    },
    //delete event by id 
    delete(req, res) {
        const event = event_service.getById(req.params.id)
 
        if (event) {
            event_service.delete(req.params.id)
            res.status(204).send('Event deleted successfully')
        } 
        else {
            res.status(404).send('Event not found')
        }
    }
    
}

module.exports = event_controller
