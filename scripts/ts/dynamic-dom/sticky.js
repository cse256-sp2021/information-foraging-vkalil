export function stickToIt() {
    window.onscroll = function() {myFunction()};

  // Get the header
  var header = document.getElementById("main-menu-container");

  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    print("running");
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
      print("add sticky");
    } else {
      header.classList.remove("sticky");
      print("no need");
    }
  }
  }
