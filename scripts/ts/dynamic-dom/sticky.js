export function stickToIt() {
    window.onscroll = function() {myFunction()};

  // Get the header
  var header = document.getElementById("main-menu-container");
 var dropdown = document.getElementById("mturk-top-banner-drop-down-content");
  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    print("running");
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
      print("add sticky");
    } 
    print("checking dropdown here");
    if(dropdown.offsetHeight > 320){
      print("wowowowow");
    }

    else {
      header.classList.remove("sticky");
      print("no need");
    }
  }
  }
