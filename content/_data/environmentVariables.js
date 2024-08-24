module.exports = function() {
	return {
	  environment: process.env.ENVIRONMENT,
	  foo: "test"
	};
  };
console.log("ARRRAAAGGGHHHH!!!!")
console.log(process.env.ENVIRONMENT)