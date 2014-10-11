exampleApp.widgets

.directive('plain',function(){
	return{
		restrict:'E',
    controller:'PlainCtrl',
    scope:{
      plainData:'@'
    }
	}
})