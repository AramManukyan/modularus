exampleApp.login.factory('loginService',function($http,sessionService){
	return {
		login:function(data){
			var url = "/data/users.php";
			var token = "usr_";
			var success = function (msg){
				console.log(msg);
				/*if(msg.status){
					sessionService.set('user',token + "123456");
				} else {

				}*/
			}

			var error = function(){
				
			}

			$http.get(url).success(success).error(error);
		},	
	}
});

exampleApp.login.factory('sessionService',function(){
	return {
		set:function(key,value){
			sessionStorage.setItem(key,value);
		},
		get:function(key){
			sessionStorage.getItem(key);
		},
		destroy:function(key){
			sessionStorage.removeItem(key);
		},
		setLocal:function(key,value){
			localStorage.setItem(key,value);
		},
		getLocal:function(key){
			localStorage.getItem(key);
		},
		destroyLocal:function(key){
			localStorage.removeItem(key);
		}
	}
});