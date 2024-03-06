var mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
   name: { 
        type: String, 
    },
   
    email: {
        type: String,        
    },
    mobile: {
        type: String,        
    }
});

var contact = mongoose.model("Contact", contactSchema); // Removed extra space after "Contact"

module.exports = contact;
