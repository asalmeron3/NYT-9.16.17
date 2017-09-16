var APIkey_sangwon = "3e30f5ce6d9a4eb0be4b37a8a23538f6"
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIkey_sangwon;

var queryTerm 	= "";
var numResults 	= 0;
var startYear 	= 0;
var endYear		= 0;

var articleCounter = 0;

function getTheArticles(){
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(NYTData){
		console.log(queryTerm);
		console.log(numResults);
		console.log(startYear);
		console.log(endYear);

		for(var i = 0; i < numResults; i++){
			
			articleCounter++;

			var smallDiv = $("<div>");
			//sticker-button use i 
			smallDiv.apend(BootstrapButton, i);

			//title
			var title = articleCounter + NYTData.response.docs[i].headline.main;

			//author
			var author = articleCounter + NYTData.response.docs[i].byline.original;

			//Section
			var section = article.Counter + NYTData.response.docs[i].section_name;

			//pub date
			var pub_data = articleCounter + NYTDATA.response.docs[i].pub_date;

			//link
			var link = article.Counter + NYTData.response.docs[i].web_url;

			smallDiv.append(title);




		}
	});
}

$("#search").on("click", function(){

	queryTerm = "&q=" + $("#search-input").val();

	numResults = "&limits=" + $("search-num").val();

	articleCount = $("#serach-num").val();



	getTheArticles();

});