const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
