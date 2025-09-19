'use strict';

const getScrollPercent = () => {

  //スクロール量
  const scrolled = window.scrollY; //「scrollY」は上下（縦）何pxスクロールしたかの数値が取得できる windowのスクロール量を知りたいから「window.scrollY」とする
  console.log(`${scrolled}スクロールされました`);

  //ページ全体の高さ
  const pageHeight = document.documentElement.scrollHeight;

  //表示領域の高さ
  const viewHeight = document.documentElement.clientHeight; //「client」クライアント（見ているブラウザのこと）
  // console.log(`ページの高さ：${pageHeight}、表示領域の高さ：${viewHeight}`); 確認用のためコメントアウト

  // スクロールされた割合
  // 「スクロール量 ÷（ページ全体の高さ - 表示領域の高さ）× 100」
  const percentage = scrolled / (pageHeight - viewHeight) * 100;
  // console.log(percentage); 確認用のためコメントアウト

  //プログレスバーに幅を指定
  document.querySelector('#bar').style.width = `${percentage}%`;
}


window.addEventListener('scroll', getScrollPercent);