$(function() {
	(function() {
		var headerNav = $(".header nav.navbar");
		$(document).on('scroll',function(){
			if($(document.body).scrollTop()>headerNav.innerHeight()){
				headerNav.addClass('current');
			}else{
				headerNav.removeClass('current');
			}
		});//导航栏特效
		
		var header = $(".header");
		var ways = $(".service .col-sm-6");
		var waysRow = $('.ways-row')
		$(document).on('scroll',function(){
			if($(document.body).scrollTop()>(header.innerHeight()-300)){
				ways.addClass('animated fadeInUp');
			}
		}); //service 展示特效
		
		var way_detail = $(".ways-details-col-row .col-sm-4");
		$(document).on('scroll',function(){
			if($(document.body).scrollTop()>(waysRow.offset().top-300)){
				way_detail.addClass('animated fadeInUp');
			}
		}); // ways特效
		
		var company = $(".companies-of-all");
		var view_word = $(".view-words");
		$(document).on('scroll',function(){
			if($(document.body).scrollTop()>(company.offset().top-200)){
				view_word.addClass('animated fadeInLeft');
			}
		});
		
		var learn = $('.learn-our-blog');
		var blogAr = $(".learn-our-blog .col-sm-3");
		$(document).on('scroll',function(){
			if($(document.body).scrollTop()>(learn.offset().top-300)){
				blogAr.each(function(index){
					$(this).css('animation-delay',index*500+'ms');
					$(this).addClass('animated fadeInUp');
				})
			}
		});
	})();

})