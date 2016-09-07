/*
 * MAgallery - v1.0.0
 * https://github.com/mohamednasr/MAgallery
 * 2016-9-7
 * Copyright (c) 2016 Mohamed Nasr
 * License: MIT
*/
var myGalleries = [];
function MAgallery(galleryId){
	myGalleries.push(galleryId);
		$("#"+galleryId).append('<span class="gallery-loading-container"><span class="loading-gallery"></span></span>')
	$(window).load(function(){
    	imageThumb(galleryId);
    	$('.gallery-loading-container').remove();
    });
	initClick(galleryId);
	var fullScreenBody = '<div class="gallery-drop">'
    	+'<a class="gallery-close">X</a>'
    	+'<div class="container">'
    		+'<div class="gallery-fullscreen">'
	    			+'<img src="images/globe.png" class="img-responsive">'
    		+'</div>'
    	+'</div>'
		+'<a class="gallery-nav next">'
			+'<i class="fa fa-angle-right"></i>'
		+'</a>'
		+'<a class="gallery-nav prev">'
			+'<i class="fa fa-angle-left"></i>'
		+'</a>'
    +'</div>';
	$('body').append(fullScreenBody);
	closeFullscreen();
	nextImg();
	prevImg();
}
$( window ).resize(function() {
	var i = 0;
	for(i=0;i<myGalleries.length;i++){
		imageThumb(myGalleries[i]);
	}
});
function imageThumb(galleryId){
	var w = $("#"+galleryId).find('li').width()
	$("#"+galleryId).find('li').each(function(){
		$(this).height(w);
		var c = $(this).find('img')[0];
		if($(c).width()<=$(c).height()){
			$(c).addClass('vertical');
		}
	})
}
var currentDisplayed;
function initClick(galleryId)
{
	$("#"+galleryId).find('li').each(function(){
		$(this).find("span").click(function(){
		currentDisplayed = $(this).parents("li");
			var img = $(".gallery-drop .gallery-fullscreen").find('img')[0];
			console.log(img)
			$(img).attr('src',$(this).find('img')[0].src);

			$(".gallery-drop").addClass("show");
		});
	})
}
function closeFullscreen(){
	$(".gallery-drop img").click(function(){
		event.stopPropagation();
	})
	$(".gallery-drop .gallery-nav").click(function(){
		event.stopPropagation();
	})
	$(".gallery-close").click(function(){
		$(".gallery-drop").removeClass("show");
	});
	$(".gallery-drop").click(function(){
		$(".gallery-drop").removeClass("show");
	});
}
function nextImg(){
	$(".gallery-nav.next").click(function(){
		if($(currentDisplayed).next().length>0)
			$(currentDisplayed).next().find("span").click();
		else{
			$(currentDisplayed).parents(".gallery").find("li").first().find("span").click();
		}
		
	})
}
function prevImg(){
	$(".gallery-nav.prev").click(function(){
		if($(currentDisplayed).prev().length>0)
			$(currentDisplayed).prev().find("span").click();
		else{
			$(currentDisplayed).parents(".gallery").find("li").last().find("span").click();
		}
		
	})
}