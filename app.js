// グループセレクタ
// $(".p2, #h2").css("color","red");

// 子孫セレクタ
// id=”div1”内にあるすべてのp要素の文字色を赤くする
// $("#div1 p").css("color","red");

// 属性セレクタ
// h1要素で、id属性が”h2ではない”要素の文字色を赤くする
// $("h1[id!='h2']").css("color","red");

// $(function () {
  // $('.box1').on({
    // 'click': function(){$('.box1').addClass('box1-ext');},
    // 'mouseout': function(){$('.box1').removeClass('box1-ext');}
  // });
// });

// $(function() {
  // ①「ボタンがクリックされたとき」に動作するイベント
  // $(":button").click(function() {
    // ②$("#jqs-1 p span")を$(":text").val()のテキストに書き換える
    // $("#jqs-1 p span").text($(":text").val());
  // });
// });

// thisはクリックされた要素を指す
$(function(){
  $('.box1').on('click',function(){
    $(this).slideUp();
  });
});