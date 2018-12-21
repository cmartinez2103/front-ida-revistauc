$(document).ready(function () {
   $(window).scroll(function() {
      var height = $(window).scrollTop();
      console.log(height);
      if (height > 500) {
         $('#scroll_top').fadeIn();
         console.log('si');
      } else {
         $('#scroll_top').fadeOut();
         console.log('no');
      }
   });

});
