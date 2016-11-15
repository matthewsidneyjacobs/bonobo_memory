// var loretta1 = {
//   id: "loretta",
//   src: "photos/loretta1test2.png"
// }
//
// var loretta2 = {
//   id: "loretta",
//   src: "photos/loretta2.png"
// }
//
// var array_ids = [1,2,3,4,5,6,7,8,9];
// function mixedUpArr(array) {
//   return array.sort(function(a,b) {return .5-Math.random()});
// }
// console.log(mixedUpArr(array_ids));
//
// var randos = function randomNum() {
//   return Math.floor(Math.random() * (3-1) + 1);
// }
// console.log(randos());
//
//
//
// $(document).ready(function() {
//
//   $('.card').addClass('background-question');
//
//   // $('.card').click(function() {
//   //   $(this).removeClass('background-question');
//   //   $(this).addClass('background-answer');
//   // })
//
//   // $('#card1').addClass('random-background').css("background-image", "loretta2.src");
//
//   for (var i = 1; i < 10; i++) {
//     $('#card[i]').css("answer_id",randos[i-1]);
//   }
//   console.log($('#card1').prop('.answer_id'))
//
//   $('.reset-button').click(function() {
//     $('.card').removeClass('background-answer')
//     $('.card').addClass('background-question')
//   })
// });



var photo_arr = [
  {id:'loretta', src: "url(/photos/loretta1test2.png)"}, {id:'loretta', src: "url(/photos/loretta2.png)"},
  {id:'belle', src: "url(/photos/belle1.png)"},
  {id:'belle', src: "url(/photos/belle2.png)"},
  {id:'kali', src: "url(/photos/kali1.png)"},
  {id:'kali', src: "url(/photos/kali2.png)"},
  {id:'lisa', src: "url(/photos/lisa1.png)"},
  {id:'lisa', src: "url(/photos/lisatest2.png)"},
  {id:'erin', src: "url(/photos/erin1.png)"}
]

function shuffle(array) {
  var i = 0, j = 0, temp = null;
  for (i = array.length -1; i > 0; i -=1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

console.log(shuffle(photo_arr))

$(document).ready(function() {


    $('.card').addClass('card-q');
    //
    for (var i = 0; i < 9; i++) {
      $('.card').each(function(index) {
        $(this).attr('data-card-value',shuffle(photo_arr)[index].src)
      })
      $('.card').click(function() {
        $(this).removeClass('card-q')
        $(this).addClass('card-a').css("background-image", $(this).data('cardValue'))
      })
    }

    // $('.card').on('click', function() {
    //   $(this).css('background-image', '')
    //   $(this).html('<p>'+$(this).data('cardValue')+'</p>');
    // })


//     for (var i = 0; i <9; i++) {
//
//     $('.card').each(function() {
//
//     $(this).addClass('card-a').css("background-image", rando_bonobo[i]);
//   })
// }
    // $('.card').addClass('card-a');
    //
    // $('#card1').click(function() {
    //   $(this).removeClass('card-q');
    //   $(this).addClass('card-a').css("background-image", rando_bonobo[0])
    // })
    // for (var i =0; i <9; i++) {
    //   var $bonobo_pic = [];
    //   $bonobo_pic.push(mixedUpPhotos(photo_arr)[i].src);
    //   $('#card1').addClass('card-a').css("background-image", $bonobo_pic[i])
    // }

    // $('#card1').addClass('card-a').css("background-image", mixedUpPhotos(photo_arr)[0].src)

    // for (var i = 0; i < 9; i++) {
    //   var $bonobo_pic = mixedUpPhotos(photo_arr)[i].src;
    //   $('.card').removeClass('card-q')
    //   $('.card').addClass('card-a').css("background-image  ", $bonobo_pic)
    // }


    // $('.card').each(function() {
    //   $(this).addClass('card-a').css("background-image", $bonobo_pic)
    // })
  })

    // console.log($bonobo_pic);
    // $('.card').click(function() {
    //   $(this).removeClass('background-question')
    //   $(this).addClass('background_bonobo')
    // })


    // $('.card').click(function() {
    //   $(this).removeClass('card-q')
    //   $(this).addClass('card-a').css("background-image", $bonobo_pic)
    // });
//});
