// Adding event listener to one element
$("h1").click(function () {
  console.log("h1 has been clicked!");
});

// Adding event listeners to multiple elements
$("button").click(function () {
  let text = $(this).text();
  console.log("A Button has been clicked!");
  console.log("You clicked " + text);
});

$("button:first-of-type").click(function () {
  $(this).css("backgroundColor", "steelblue");
});

$("button").last().click(function () {
  $(this).css("backgroundColor", "pink");
});

// Adding .keypress event
$("input[type=text]").keypress(function (event) {
  if (event.which === 13) {
    console.log("You hit enter");
  }
});

// Add .on method
$("h1").on("click", function () {
  $(this).css("color", "purple");
});

$("input[type=text]").on("keypress", function () {
  console.log("You did it again");
});

$("button").on("mouseenter", function () {
  $(this).css("font-weight", "bold");
});

$("button").on("mouseleave", function () {
  $(this).css("font-weight", "normal");
});