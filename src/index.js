// 메인 페이지 자바스크립트

// Category Sorting Logic
let sortBaby = document.querySelector(".btn-group");

$(".category__find").click(() => {
  $(".sorting").hide();
  if (sortBaby.querySelector("label").textContent == "출산전") {
    $("baby-option1").show();
  }
});
