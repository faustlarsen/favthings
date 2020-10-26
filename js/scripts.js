$(document).ready(function() {
  $("#quiz").submit(function(event) {
    event.preventDefault();

    let movies = $("#movies").val();
    let books = $("#books").val();
    let music = $("#music").val();
    let food = $("#food").val();
    let drink = $("#drink").val();
    let season = $("#season").val();
    let favorite = [movies,books,music,drink,season];

    $(".movies").text(movies);
    $(".books").text(books);
    $(".music").text(music);
    $(".food").text(food);
    $(".drink").text(drink);
    $(".season").text(season);



  $("#result").show();
  }); 
});