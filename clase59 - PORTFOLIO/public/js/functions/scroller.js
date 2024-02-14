 // Change style of navbar on scroll
 window.onscroll = function () {
  myFunction();
};
function myFunction() {
  var navbar = document.getElementById("myNavbar");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    navbar.className =
      "mvc-bar" + " mvc-card" + " mvc-animate-top" + " mvc-white";
  } else {
    navbar.className = navbar.className.replace(
      " mvc-card mvc-animate-top mvc-white",
      ""
    );
  }
}