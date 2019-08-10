var nextbtn = $('.next-button');
var upbtn = $('.up-button');
var header = $('header');

var a = true;
//var aplan = false;

$(document).ready(function(){
    nextbtn.click(function(){
    	header.slideUp(500);
    	$('body').css('overflow', 'visible');
    	$('html').css('overflow', 'visible');
    	setTimeout(upbtn.show(), 500);
    });
    upbtn.click(function(){
    	header.slideDown(500);
    	$('body').css('overflow', 'hidden');
    	$('html').css('overflow', 'hidden');
    	setTimeout(upbtn.hide(), 500);
    });

/*	if($(aplan).text() == $('#p0').text()){
    	$('#p0').mouseenter(function(){
	    	$('#p0').css('transform', 'scale(1.05)');
	    });
	    $('#p0').mouseleave(function(){
	    		$('#p0').css('transform', '');
		});
	}
	if($(aplan).text() == $('#p1').text()){
    	$('#p1').mouseenter(function(){
	    	$('#p1').css('transform', 'scale(1.05)');
	    });
	    $('#p1').mouseleave(function(){
	    		$('#p1').css('transform', '');
		});
	}
	if($(aplan).text() == $('#p2').text()){
    	$('#p2').mouseenter(function(){
	    	$('#p2').css('transform', 'scale(1.05)');
	    });
	    $('#p2').mouseleave(function(){
	    		$('#p2').css('transform', '');
		});
	}
*/
	$('.plan').click(function(){
		$('.plan').css('background', 'none').css('color', '#fff');
		$('.plan').css('transform', '');
		$(this).css('background-color', '#fff').css('color', '#000');
		$(this).css('transform', 'scale(1.05)');
		if(a){
			$('.nextbtn').css('visibility','visible');
			a = false;
		}
		//aplan = $(this);
	});
	$('.nextbtn').click(function(){
		$('.prevbtn').css('visibility','visible');
		$('.nextbtn').css('visibility','hidden');
		$('.tf').hide();
		$('.form').css('display','flex');
		$('.chooseplan').children('span').text('Введите номер телефона');
	});
	$('.prevbtn').click(function(){
		$('.prevbtn').css('visibility','hidden');
		$('.nextbtn').css('visibility','visible');
		$('.form').hide();
		$('.tf').show();
		$('.chooseplan').children('span').text('Выберите форму поездки');
	});
});