var LOC_DATA;

$(document).ready(function(){
  initAng();
  initStorage();

});

function initStorage(){
  if(typeof(Storage) !== "undeinfed"){
    LOC_DATA = $(document).localStorage;
  }else{
    alert("html5 storage not supported");
  }
}

function initAng(){
	var model = { user : "ben test" };
			  
	var testApp = angular.module("testApp", []);
      
  testApp.run(function ($http){
    $http.get("json/test.json").success(function(data){
      model.items = data;
    });
  });

	testApp.controller("testCtrl", function ($scope) {
	  $scope.test = model;
				
    var date = new Date(); 
		$scope.initSlice = function(testInput) {
      alert("testinput:" + testInput); //bql. TEST
	  }
	});
}	
