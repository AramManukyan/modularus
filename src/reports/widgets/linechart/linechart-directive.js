exampleApp.reports

.directive('lineChart',function(){
	return{
		restrict:'E',
		controller:'LinechartCtrl',
		scope:{
			linechhartData:'@',
		}
	}
})