
$(document).ready(function() {
  let fortuneResults = {
    money: [
      { stars: "★★★", detail: "最高の金運です！いつの間にかお金が溜まっているかも・・・？" },
      { stars: "★★", detail: "まずまず金運です！使いすぎには注意しましょう！" },
      { stars: "★", detail: "悪い傾向が見られます！財布の紐は絞めておくと吉です！" }
    ],
  
    work: [
      { stars: "★★★", detail: "最高の仕事運です！いつも以上にチャンスが巡ってくるかも・・・？" },
      { stars: "★★", detail: "まずまず仕事運です！普段通り仕事が進むでしょう！" },
      { stars: "★", detail: "悪い傾向が見られます！自信過剰にならないように注意しましょう" }
    ],
  
    health: [
      { stars: "★★★", detail: "最高の健康運です！ランニングの距離を伸ばしても良いですね！" },
      { stars: "★★", detail: "まずまず健康運です！無理せず体を動かしましょう！" },
      { stars: "★", detail: "悪い傾向が見られます！ケガにご注意を・・・" }
    ]
  };
  
  $('.js-fortune-start').on('click', function() {
    // fortuneResultsオブジェクトのmoney/work/healthをfor文を使用して取得
    for (let category of ['money', 'work', 'health']) {
      let categoryData = fortuneResults[category];
  
      // Math.floor()とMath.random()を使用して1~3の乱数を生成
      let randomIndex = Math.floor(Math.random() * 3);
  
      // 金運、仕事運、健康運のstarsクラスとdetailクラスに乱数を使用してfortuneResultsオブジェクトの値を適用する
      let starsElement = $(`.${category} .stars`);
      let detailElement = $(`.${category} .detail`);
  
      starsElement.text(categoryData[randomIndex].stars);
      detailElement.text(categoryData[randomIndex].detail);
    }
    
    $(this).toggleClass('js-fortune-start js-fortune-retry').text('もう一度占う！');
    $('.result').show();
  });
});
