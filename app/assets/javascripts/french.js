$(document).ready(function () {
  var $body = $('body');
  var $frog = $('.frog');
  var $princess = $('.princess');

  var frogFrench = ['venez ici princess', 'embrasse moi'];
  var princessFrench = ['jamais grenouille', 'pas de baisers'];

  var randQuoteFrog = frogFrench[Math.floor(Math.random() * frogFrench.length)];
  console.log(randQuoteFrog);

  var randQuotePrincess = princessFrench[Math.floor(Math.random() * princessFrench.length)];
  console.log(randQuotePrincess);

  var $frogQuote = $('<p />').text(randQuoteFrog);
  var $princessQuote = $('<div class="princess" />').text(randQuotePrincess);


  $frogQuote.appendTo($frog);
  $princessQuote.appendTo($princess);




});
