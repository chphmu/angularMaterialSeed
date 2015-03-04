require({
	paths: {
		angular : '../lib/angular/angular',
		animate : '../lib/angular/angular-animate',
		underscore : '../lib/underscore/underscore.min',
		domReady : '../lib/require/domReady',
		router : '../lib/ui-router/angular-ui-router',
		restangular : '../lib/restangular/restangular',
		moment : '../lib/moment/moment',
		marked : '../lib/marked/marked',
		highlight : '../lib/highlight/highlight',
		highcharts : '../lib/highchart/highcharts-all',
		circles : '../lib/circle/circles',
		fabric : '../lib/fabric/fabric.min'
	},
	shim: {
		'angular' : {'exports' : 'angular'},
		'animate' : { 'deps' : ['angular']},
		'router' : { 'deps' : ['angular']},
		'underscore' : {'exports' : '_'},
		'highcharts' : { 'exports' : 'Highcharts'}
	},
	priority: [
		'angular'
	],
	urlArgs: 'v=0.1',
	waitSeconds: 0
}, ['app', 
	'angular', 
	'animate',
	'routes', 
	'bootstrap', 
	'controllers/controllers', 
	'services/services', 
	'directives/directives', 
	'providers/providers', 
	'filters/filters', 
	
	'moment', 
	'highcharts', 
	'marked', 
	'highlight', 
	'circles',
	'fabric'], function (app) {
		app.run(['$rootScope', '$state', '$stateParams', 'IMG_BASE_URL',
			function ($rootScope, $state, $stateParams, IMG_BASE_URL) {
				console.log('main.js - called');
				$rootScope['IMG_BASE_URL'] = IMG_BASE_URL;		
		}]);

		
		app.factory('BrokerRestangular', ['Restangular', 'REST_BROKER_API', function(Restangular, REST_BROKER_API) {
			return Restangular.withConfig(function(RestangularConfigurer) {
				RestangularConfigurer.setBaseUrl(REST_BROKER_API);
			});
		}]);

		app.factory('ServiceRestangular', ['Restangular', 'REST_SERVICE_API', function(Restangular, REST_SERVICE_API) {
			return Restangular.withConfig(function(RestangularConfigurer) {
				RestangularConfigurer.setBaseUrl(REST_SERVICE_API);
			});
		}]);
});
