module.exports = function(config) {
	config.set({
		basePath: '../test',
		frameworks: ['ng-scenario'],
		files: [
			'e2e/*.js'
		],
		proxies: {
			'/' : 'http://localhost:3000/'
		},
		port : 9876,
		browsers: ['Chrome'],
		singleRun : false,
		autoWatch: true,
		repoters: ['progress'],
		plugins:[
			'karma-ng-scenario',
			'karma-chrome-launcher',
      		'karma-commonjs'
		]
		
	});
};