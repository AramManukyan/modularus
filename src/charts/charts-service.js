sbAdmin.common

.factory('chartsService', function($http,$log) {

	function getCharts(type, callback) {

		$http.get('assets/data/chart-' + type + '.json').success(function(data){

			callback(data);
			
		}).error(function(){

			$log.log('Error');
			callback([]);

		});

	}

	function generateData(min,max,step,callback){
		var data = {"sin":[],"cos":[]};
		var offset = 0;
		for (var i = min; i < max; i += step) {
          data.sin.push([i, Math.sin(i + offset)]);
          data.cos.push([i, Math.cos(i + offset)]);
      	}
      	callback(data);
	}

	var randData = [];
	function getRandomData(maximum) {

		if (randData.length) {
		  randData = randData.slice(1);
		}

		while (randData.length < maximum) {
		  var previous = randData.length ? randData[randData.length - 1] : 50;
		  var y = previous + Math.random() * 10 - 5;
		  randData.push(y < 0 ? 0 : y > 100 ? 100 : y);
		}

		// zip the generated y values with the x values

		var res = [];
		for (var i = 0; i < randData.length; ++i) {
		  res.push([i, randData[i]])
		}

		return res;
	}

	return {
		get: function(type, callback) {
			getCharts(type, callback);
		},
		genData:function(min,max,step,callback){
			generateData(min,max,step,callback);
		},
		getRandom:function(maximum){
			return getRandomData(maximum);
		}
	}
});