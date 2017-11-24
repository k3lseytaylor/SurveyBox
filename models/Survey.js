const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');
//creating Schema 
const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  //Sub document collection
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  // users ID ref belongs to User collection
  //_user because convention reference field
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateSent: Date,
  lastResponded: Date
});
//loads it to mongoose libary 
mongoose.model('surveys', surveySchema);