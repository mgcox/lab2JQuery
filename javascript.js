var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {  	
$scope.shows = [];
$scope.GetListings = function(){
	console.log("in GetListings");
	var myURL = "http://api.tvmaze.com/schedule?country=US&date=2016-09-23";
	$scope.shows = [];
	$.ajax({
		url : myURL,
		dataType : "json",
		success : function(data){
			console.log(data);
			data.forEach(function(object){
				if(object.show.network.name == $scope.dropDownValue){
					myURL = "http://www.omdbapi.com/?t=" + object.show.name + "&y=&plot=short&r=json";
					$.ajax({
						url : myURL,
						dataType : "json",
						success : function(data2){
							console.log(data2);
							var newShow = {
								name: data2.Title,
								plot: data2.Plot,
								rating: data2.imdbRating,
								genre: data2.Genre,
								image: data2.Poster
							}
							$scope.shows.push(newShow);
							$scope.$apply();
						}
					});
				}
			}, this);
		}
	});
};
});