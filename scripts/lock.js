let input = document.querySelector(".search-form");
let search = document.querySelector("input");
let button = document.getElementsByClassName("lock-btn")[0];
button.addEventListener("click", function (e) {
  e.preventDefault();
  input.classList.toggle("active");
});
search.addEventListener("focus", function () {
  input.classList.add("focus");
});
search.addEventListener("blur", function () {
  search.value.length != 0
    ? input.classList.add("focus")
    : input.classList.remove("focus");
});

function validate(event) {
  if (event.keyCode == 13) {
    let input = document.getElementsByClassName("lock-input")[0];
    let value = input.value;
    console.log(value);
    if (value === "munchkin") {
      window.location.href = "book.html";
    }
    input.value = "";
  }
}
