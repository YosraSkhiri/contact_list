let cards;
cards = document.querySelectorAll('.card');

let search = debounce(function () {
  let input;
  input = document.getElementById('search').value.toLowerCase();

  for (i = 0; i < cards.length; i++) {
    a = cards[i].children[1].innerText.toLowerCase();
    if (a.indexOf(input) > -1) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }

}, 250);

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};