const event_service = require('../../../services/event')
// Define the home controller object
const home_controller = {
        index: async (req, res) =>{
            res.render('home');
         }, 
         // Add action: Render the add/update form with mode set to 'Add'
        add: async (req, res) =>{
            res.render('home/add_update', { mode: 'Add' });
            },
          // Update action:
  //  - Fetch event data using getById method from event service
  //  - Render the add/update form with event data and mode set to 'Update'
        update: async (req, res) =>{
            const eventData = await event_service.getById(req.params.id);
            res.render('home/add_update', { mode: 'Update', eventData: eventData });
            }      
    };
     
module.exports = home_controller;