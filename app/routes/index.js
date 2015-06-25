import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		if (navigator.geolocation) {
			var timeoutVal = 10 * 1000 * 1000;
			navigator.geolocation.getCurrentPosition(displayPosition, displayError);
		}
		
		else {
			console.log('You are no where!');
		}
		
		function displayPosition(position) {
			console.log("Latitude: " + position.coords.latitude +
			 ",Longitude: " + position.coords.longitude);
		}
		
		function displayError(error) {
			var errors = {
				1: 'Permission denied',
				2: 'Position unavailable',
				3: 'Request timeout'
			};
			console.log(errors[erros.code]);
		}
		
	}
});

