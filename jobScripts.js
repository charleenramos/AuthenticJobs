$(document).on('pageinit', function() {
	// 'enter' in textbox executes search
	$('#searchinput').keypress(function(e){
		if(e.keyCode==13)
		$('#search_btn').click();
	});
	// handles initial searches
	$("#search_btn").click(function(){
		$("#load_more").data("result-page", 0);
		$("#indicators").hide();
		$("#contents").empty();
		$(this).button("disable");
		doSearch();
	});
	// handles continuing searches
	$("#load_more").click(function(e){
		$(this).button("disable");
		doSearch();
	});
	// sets up initial pagination params
	$("#load_more").data("result-page", 0);
	// hides the load more button if there are no results displayed
	if ($("#contents li").size() == 0){
		$("#indicators").hide();
	}
});

// performs a search, new or continuing
function doSearch(){
	// initial setup
	var _contents = $("#contents");
	var load_more_button = $("#load_more");
	var currPage = load_more_button.data("result-page");
	$("#busy").hide().html("<span class='spinner'>Loading...</span>").slideDown();
	// build request URL
	var _root = "https://authenticjobs.com/api/?api_key=XXX&method=aj.jobs.search&keywords=php,mysql&perpage=1";//edited
	var _key = "  ";//edited
	var _ingredients = encodeURIComponent($("#ingredients").val());
	var _page = currPage + 1;
	var _url = _root + "?key=" + _key + "&q=" + _ingredients + "&page=" + _page;
	var query = "select * from json where url=\"" + _url + "\""
	makeRequest(_contents, query); // send and process HTTP request
	load_more_button.data().result-page++; // update button
}
