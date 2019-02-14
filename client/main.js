import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '../lib/collections.js';

Template.profiles.helpers({
	profFname(){
		return userDB.findOne({}).firstName;
	}
});

Template.profiles.events({
  'click .js-like'(event, instance) {
	console.log("You clicked like");    
  },
  'click .js-dislike'(event, instance){
	alert("Clicked dislike");
  }  
});


Template.addProfile.events({
	'click .js-saveProfile'(event, instance){
		// get user data
		var fName = $("#exampleModal input[name='firstName']").val();
		var lName = $("#exampleModal input[name='lastName']").val();
		var image = $("#exampleModal input[name='image']").val();
		console.log("The first name is",fName);
		console.log("The last name is",lName);
		console.log("The image is",image);
		// Reset the form
		$("#exampleModal input[name='firstName']").val('');
		$("#exampleModal input[name='lastName']").val('');
		$("#exampleModal input[name='image']").val('');
		// Close the modal
		$("#exampleModal").modal("hide");
		userDB.insert({'firstName':fName, 'lastName':lName, 'img':image});
  }
});