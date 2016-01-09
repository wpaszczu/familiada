var main = function() {




     $('.jeden').hide();
     $('.dwa').hide();
     $('.trzy').hide();
     $('.cztery').hide();
     $('.piec').hide();
     $('.szesc').hide();



      $('.jeden-kreski').click(function() {

           $('.jeden').show();
        	 $('.jeden-kreski').hide();
           $('.jeden').load('load/jeden.txt .jeden', function(){
               calculateSum();
           });

       });



         $('.dwa-kreski').click(function() {
           	 $('.dwa').show();
           	 $('.dwa-kreski').hide();
             $('.dwa').load('load/jeden.txt .dwa', function(){
                 calculateSum();
             });
          });

          $('.trzy-kreski').click(function() {
               $('.trzy').show();
               $('.trzy-kreski').hide();
               $('.trzy').load('load/jeden.txt .trzy', function(){
                   calculateSum();
               });
          });

           $('.cztery-kreski').click(function() {
               $('.cztery').show();
               $('.cztery-kreski').hide();
               $('.cztery').load('load/jeden.txt .cztery', function(){
                   calculateSum();
               });

            });

            $('.piec-kreski').click(function() {
                 $('.piec').show();
                 $('.piec-kreski').hide();
                 $('.piec').load('load/jeden.txt .piec', function(){
                     calculateSum();
                 });

             });

             $('.szesc-kreski').click(function() {
                  $('.szesc').show();
                  $('.szesc-kreski').hide();
                  $('.szesc').load('load/jeden.txt .szesc', function(){
                      calculateSum();
                  });

              });

             $('.x').click(function() {
               $( this ).toggleClass( "xplus" );
               $(".buzz").trigger('play');
              });

              $('.bing-p').click(function() {
                $(".bing").trigger('play');
               });






}

function calculateSum() {

    var sum = 0;

    $(".txt").each(function() {

        if(!isNaN(this.value) && this.value.length!=0) {
            sum += parseFloat(this.value);
        }

    });

    $("#sum").html(sum);
}
$(document).ready(main);
