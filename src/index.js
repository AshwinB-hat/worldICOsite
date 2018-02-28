

// document.onreadystatechange = function () {
//   var state = document.readyState
//   if (state == 'complete') {
//       setTimeout(function(){
//           document.getElementById('interactive');
//          document.getElementById('load').style.visibility="hidden";
//       },1000);
      
//   }
// }



(function($) {          
    // $(document).onreadystatechange(function(){
      
    // });    

    $(document).ready(function(){ 

         setTimeout(function(){
          // document.getElementById('interactive');
          $('#load').css({"visibility":"hidden"});
      },2000);




        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 400) {
                $('nav').addClass("nav_background");
                $('.nav-link').css({"font-size":'25px'});
                $('#logo').css({"max-height":"50px"});
                
            } else {
                $('nav').removeClass("nav_background");
                $('.nav-link').css({"font-size":'30px'});
                $('#logo').css({"max-height":"100px"});
            }
        });



        // Add smooth scrolling to all links
     $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
              // Prevent default anchor click behavior
              event.preventDefault();

              // Store hash
              var hash = this.hash;

              // Using jQuery's animate() method to add smooth page scroll
              // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
              $('html, body').animate({
                scrollTop: $(hash).offset().top
              }, 800, function(){
           
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
              });
            } // End if
        });

     $(".arrow").on('click',function(event){
        event.preventDefault();
        $('html,body').animate({
          scrollTop: $("#details").offset().top
        },800,function(){
          window.location.hash='#details'
        })
     });
   });
})(jQuery);


