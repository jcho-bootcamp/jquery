// Reduce image size
$("img").css("width", "200px");

// Reset src of image
// $("img").attr("src", "beagle.jpg")

// Change src of first image
$("img:first-of-type").attr("src", "beagle.jpg");

// Change src of last image
$("img").last().attr("src", "beagle.jpg");

// Extract value from input .val()
// Can be used to clear text input .val("")
$("input").val();

// Select dropdown choice
$("select").val();

// Add class with .addClass()
$("h1").addClass("correct");

$("li").addClass("wrong");

// Remove class with .removeClass()
$("h1").removeClass("correct");

// Add toggle class with .toggleClass()
$("li:first-of-type").toggleClass("done");
$("li").toggleClass("done");


