$(document).ready(function () {
  $('a').click(function () {
    $('img').eq($(this).index()).css({ opacity: '1' }).siblings().css({ opacity: '0' })
  })
  /* var alinks = $('a')
  for (var i = 0; i < alinks.length; i++) {
    alinks.eq(i).css({
      color: 'red',
    })
  } */
})
