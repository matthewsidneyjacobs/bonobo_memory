var loretta1 = {
  id: "loretta",
  src: "photos/loretta1test2.png"
}

var loretta2 = {
  id: "loretta",
  src: "photos/loretta2.png"
}

var array_ids = [1,2,3,4,5,6,7,8,9];
function mixedUpArr(array) {
  return array.sort(function(a,b) {return .5-Math.random()});
}
console.log(mixedUpArr(array_ids));

function randomNum() {
  return Math.floor(Math.random() * (3-1) + 1);
}
console.log(randomNum());


$(document).ready(function() {

  $('.card').addClass('background-question');

  // $('.card').click(function() {
  //   $(this).removeClass('background-question');
  //   $(this).addClass('background-answer');
  // })

  // $('#card1').addClass('random-background').css("background-image", "loretta2.src");




  $('.reset-button').click(function() {
    $('.card').removeClass('background-answer')
    $('.card').addClass('background-question')
  })
});


//arrays to represent the photos. randomize the order of the array to randomize the order of photos.
//when you click on the photo it is flipped over to reveal photo
//click on two photos, if they match (maybe if they match photo id) then they cannot be unflipped.
//need a counter to show how many guesses you have made
//want to be able to  have a drop down menu to pick a bonobo to find


//is it better to have 3 games? by that i mean have three sets of images as opposed to randomly assigning images to div spots each game?

//maybe an array of objects. each object has an id and a src code?
