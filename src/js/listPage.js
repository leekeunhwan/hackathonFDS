let erase = document.querySelectorAll("label");

// article은 카테고리 변경하기를 눌러야 등장하므로 숨겨놓기

$("article").hide();

// 카테고리 변경하기를 눌렀을때 기존 태그를 숨기고 article을 보여준다.

$(".category-btn").click(function() {
  $("article").toggle();
});

// 카테고리 창에서 지웠을 떄 - 전체 기능 구현 (X)

$(".delete1").click(function() {
  $(".tag1").hide();
});

$(".delete2").click(function() {
  $(".tag2").hide();
});

$(".delete3").click(function() {
  $(".tag3").hide();
  $(".category1").hide();
});

// 카테고리 변경하기를 눌렀다가 변경할 생각이 없어서 x를 누르면 다시 원상태로 보이게 하는 로직

$(".delete").click(function() {
  $("article").hide();
  $(".tagging").show();
});

// 지우기 눌렀을때 초기화하는 것 && 시간나면 태그들어가는 것처럼 보이는 로직 짜기
/* 


*/
