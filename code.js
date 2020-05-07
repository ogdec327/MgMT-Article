$(window).scroll(function() {
  
  // selectors
  var $window = $(window),
      $body = $('body'),
      $panel = $('.section');
  

  var scroll = $window.scrollTop() + ($window.height() / 3);
 
  $panel.each(function () {
    var $this = $(this);
    

    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
          

      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });
       

      $body.addClass('color-' + $(this).data('color'));
    }
  });    
  
}).scroll();

var hotbod = document.querySelector("body");

function doStuff() {
    hotbod.className += " animate";
};

window.onload = function() {
    doStuff();
};

