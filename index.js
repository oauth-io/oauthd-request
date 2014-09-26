module.exports = function(env) {
	var plugin = require('./bin/request.js')(env);
	return plugin;
}