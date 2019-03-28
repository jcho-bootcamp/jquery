// FadeOut() --> display: none
// In order to remove use .remove() as a callback function after .fadeOut()
/*
$("button").on("click", function () {
  $("div").fadeOut(1000, function () {
    $(this).remove();
    console.log("Have been removed");
  });
});
*/

// FadeIn() and fadeToggle()
/*
$("button").on("click", function () {
  $("div").fadeToggle(1000);
});
*/

// SlideUp() --> display: none
// SlideDown() can be used from display: none
// SlideToggle()
$("button").on("click", function () {
  $("div").slideToggle(1000);
});
