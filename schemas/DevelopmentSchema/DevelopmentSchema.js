const mongoose = require('mongoose');

const DevelopmentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
      img: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      date:{
         type:String,
         required:true,
           }
 
  
  },
  { versionKey: false }
);

module.exports = mongoose.model('Development', DevelopmentSchema);
