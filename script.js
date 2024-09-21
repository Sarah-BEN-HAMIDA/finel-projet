var minusBtn = document.getElementsByClassName("fa-square-minus");

for (let i = 0; i < minusBtn.length; i++) {
  const element = minusBtn[i];
  element.addEventListener("click", function (event) {
    if (event.target.nextElementSibling.innerText > 0) {
      event.target.nextElementSibling.innerText--;
      clculateTotale();
    }
  });
}
var plusBtn = document.getElementsByClassName("fa-square-plus");

for (let i = 0; i < plusBtn.length; i++) {
  const element = plusBtn[i];
  element.addEventListener("click", function (event) {
    event.target.previousElementSibling.innerText++;
    clculateTotale();
  });
}

var likeBtn = document.getElementsByClassName("fa-thumbs-up");

for (let i = 0; i < likeBtn.length; i++) {
  const element = likeBtn[i];
  element.addEventListener("click", function (event) {
    event.target.classList.toggle("liked");
  });
}
function clculateTotale() {
  var allitem = document.getElementsByClassName("item");
  var totale = 0;
  for (let i = 0; i < allitem.length; i++) {
    const element = allitem[i];
    var qty = element.querySelector(".quantity").innerText;
    var unitprice = element.querySelector(".theprice").innerText;
    totale += qty * unitprice;
  }

  document.getElementById("total").innerText = totale;
}
clculateTotale();

// confirm button
function myFunction() {
  confirm("success ,,       The apointment will come to you In your Mailbox");
}
// fonction2
function myFunction2() {
  confirm("success ,, we seend you in your Mailbox for more confirmations ");
}
