 
		var mongoose = require('mongoose');

 		//code will come here to insert customer in mongo database
	  	var Schema = mongoose.Schema;
		// create a schema
		var UserSchema = new Schema({
		  name: { type: String, required: true },
		  phone: { type: String, required: true,unique: true },
		  email: { type: String, required: true,unique: true }
		  
		});

		// the schema is useless so far ,we need to create a model using it
	module.exports = mongoose.model('Users', UserSchema)