$(document).ready(function() {

    $('#tabs li a:not(:first)').addClass('inactive');
    $('.tab_content').hide();
    $('.tab_content:first').show();

    $('#tabs li a').click(function(){
        var t = $(this).attr('id');
        if($(this).hasClass('inactive')){ //this is the start of our condition
            $('#tabs li a').addClass('inactive');
            $(this).removeClass('inactive');

            $('.tab_content').hide();
            $('#'+ t + 'C').fadeIn('slow');
        }
    });

    //Conditions
    var wrap = $('.tab__wrap').width();
    if(wrap <= 500){
       $('body').addClass('fullwidth');
    }

});
