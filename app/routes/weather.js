import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return Ember.$.ajax("https://api.forecast.io/forecast/21864a8f61715df6c3752a4464449bae/"+params.lat+","+params.lng,
		{dataType: 'jsonp'}).then(function (response) {
			return response;
			});
	}
});
