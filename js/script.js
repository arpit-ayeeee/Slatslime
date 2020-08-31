(function (global){
	 var ss = {};

	 var homehtml = "snippets/home-snippet.html";
	 var explore = "snippets/explore.html";
	 var amd = "snippets/amd.html";
	 var abtm = "snippets/aboutme.html"

	 //Convienence function for inserting
	 var inserthtml = function(selector,html){
	 var targetelem = document.querySelector(selector);
	 targetelem.innerHTML = html;
	 };

	 var showloading = function(selector){
	 	var html = "<div>";
	 	html+= "<img src='images/ajax-loader.gif'></div>";
	 	inserthtml(selector, html);
	 }

	document.addEventListener("DOMContentLoaded", function(event){
	 	showloading("#main-content");
	 	$ajaxUtils.sendGetRequest(
	 		homehtml,function(responseText){
	 			document.querySelector("#main-content")
	 				.innerHTML = responseText;
	 		},
	 		false);
	});

	ss.loadexplore = function(){
		showloading("#main-content");
		$ajaxUtils.sendGetRequest(
			explore, function(responseText){
				document.querySelector("#main-content")
					.innerHTML = responseText;
			},
			false);
	};
	ss.loadamd = function(){
		showloading("#main-content");
		$ajaxUtils.sendGetRequest(
			amd, function(responseText){
				document.querySelector("#main-content")
					.innerHTML = responseText;
			},
			false);
	};
	ss.loadabtm = function(){
		showloading("#main-content");
		$ajaxUtils.sendGetRequest(
			abtm, function(responseText){
				document.querySelector("#main-content")
					.innerHTML = responseText;
			},
			false);
	};

	 global.$ss = ss;

})(window);
$(document).ready(function(){
	$("#cont").click(function(){
		$("#contModal").modal('show');
	});
});

