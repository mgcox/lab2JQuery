$(document).ready(function() {
	var shows;
	var myURL = "http://api.tvmaze.com/schedule?country=US&date=2016-09-23"
	$.ajax({
		url : myURL,
		dataType : "json",
		success : function(data){
			console.log(data);
			foreach(object in data){
				if(object.show.network.name == "ABC"){
					myURL = "http://www.omdbapi.com/?t=" + object.show.name + "&y=&plot=short&r=json";
					$.ajax({
						url : myURL,
						dataType : "json",
						success : function(data2){
							console.log(data2);
							var newShow{
								"name": data2.title,
								"plot": data2.plot,
								"rating": data2.imdbRating,
								"genre" : data2.Genre,
								"image" : data2.Poster
							}
							shows.add(newShow);
						}
					});
				}
			}
		}
	});
});
