var Memorial = window.Memorial || {};
Memorial = (function($) {
	'use strict';
	var common = {
		layerOpen: function(target) {
			var el = $(target);
			el.removeClass('is-hidden').addClass('is-open');
			$('body').addClass('layer-opens');
		},

		layerClose: function(target) {
			var el = $(target);
			el.removeClass('is-open').addClass('is-hidden');
			$('body').removeClass('layer-opens');
			return false;
		},

		layerToggle: function(target) {
			var el = $(target);
			if (el.hasClass('is-active')) {
				el.removeClass('is-active');
			} else {
				el.addClass('is-active');
			}
		},

		layerNextToggle: function(target) {
			var el = $(target).next();
			if (el.hasClass('is-active')) {
				el.removeClass('is-active');
			} else {
				el.addClass('is-active');
			}
		},

		userAgentCheckIE: function() {
			if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > -1) {
				$('body').addClass('ie');
			}
		},

		motion : function(){
			$('.is-motion').each(function(){
				var top = $(this).offset().top;
				var scrollTop = $(window).scrollTop();
				var windowHeight = $(window).height();

				if( scrollTop > top - (windowHeight - (windowHeight * 0.15)) ){
					$(this).addClass('on');
				}else if( scrollTop < top ){
					$(this).removeClass('on');
				}
			});
		},

		init: function() {
			common.userAgentCheckIE();

		},
	};

	$(document).ready(function() {
		common.init();

	});

	return {
		layerOpen: common.layerOpen,
		layerClose: common.layerClose,
		layerToggle: common.layerToggle,
		layerNextToggle: common.layerNextToggle,

	};
})($);
