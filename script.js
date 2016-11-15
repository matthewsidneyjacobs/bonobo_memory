
var photo_arr = [
  {id:'loretta', src: "url(/photos/loretta1test2.png)"}, {id:'loretta', src: "url(/photos/loretta2.png)"},
  {id:'belle', src: "url(/photos/belle1.png)"},
  {id:'belle', src: "url(/photos/belle2.png)"},
  {id:'kali', src: "url(/photos/kali1.png)"},
  {id:'kali', src: "url(/photos/2resize_kali2.png)"},
  {id:'lisa', src: "url(/photos/5resize_lisa1.png)"},
  {id:'lisa', src: "url(/photos/lisatest2.png)"},
  {id:'erin', src: "url(/photos/3resize_erin1.png)"}
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

var shuffled = shuffle(photo_arr);
console.log(shuffled);


$(document).ready(function() {

    $('.card').addClass('card-q');
    //
    for (var i = 0; i < 9; i++) {
      $('.card').each(function(index) {
        $(this).attr('data-card-value',shuffled[index].src)
      })
      $('.card').click(function() {
        $(this).removeClass('card-q')
        $(this).addClass('card-a').css("background-image", $(this).data('cardValue'))
      })
    }



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
