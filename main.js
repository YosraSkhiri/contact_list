let mames;
cards = document.querySelectorAll('.card');

function search() {
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
}