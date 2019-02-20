import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '../lib/collections.js';

Template.profiles.helpers({
	profAll(){
		return userDB.find({});
	}
});

Template.profiles.events({
  'click .js-like'(event, instance) {
	console.log("You clicked like");    
  },
  'click .js-dislike'(event, instance){
	alert("Clicked dislike");
  },
  'click .js-delete'(event, instance){
  	// console.log(this._id);
  	var profID = this._id;
  	$("#" + profID).fadeOut("slow", "swing", function () {
  		userDB.remove({_id: profID});
  	});
  	
  }
});


Template.addProfile.events({
	'click .js-saveProfile'(event, instance){
		// get user data
		var fName = $("#exampleModal input[name='firstName']").val();
		var lName = $("#exampleModal input[name='lastName']").val();
		var image = $("#exampleModal input[name='image']").val();
		if (image == ""){
			image="ninja.jpg";
		}
		// Reset the form
		$("#exampleModal input[name='firstName']").val('');
		$("#exampleModal input[name='lastName']").val('');
		$("#exampleModal input[name='image']").val('');
		// Close the modal
		$("#exampleModal").modal("hide");
		userDB.insert({'firstName':fName, 'lastName':lName, 'img':image});
  }
});