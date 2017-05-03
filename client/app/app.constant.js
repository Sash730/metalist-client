import angular from 'angular';

let constantsModule = angular.module("constants", [])
.constant("appConfig", {
	"userRoles": [
		"guest",
		"user",
		"steward",
		"cashier",
		"moderator",
		"admin"
	]
});

export default constantsModule;