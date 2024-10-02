jQuery(function($){
	
	$(document).ready(function() {
		
		//jQuery('.services div.smue-service-box-button-section').remove();
		//jQuery('.services div.smue-service-box-icon-holder').append('smue-service-box-button-section');
		jQuery('.counter-item').appear(function() {
			jQuery('.counter-number').countTo();
			jQuery(this).addClass('funcionando');
			console.log('funcionando');
		});
		
	}); 
	
	$(window).scroll(function() {
	    
		if($(this).scrollTop()>150){
			$('.header_lower_row').addClass('header_shrink'); 
		} 
		 else{
			$('.header_lower_row').removeClass('header_shrink'); 
		} 
	 
	});
	
});
