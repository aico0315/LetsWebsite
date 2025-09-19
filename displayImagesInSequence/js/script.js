'use strict';

const items = document.querySelectorAll('.img-item'); //querySelectorAllで「.img-item」のクラスがついた要素を全て取得

for(let i = 0; i < items.length; i++) { //for文を使って画像をそれぞれ出力できるようにする
  const keyframes = {
    filter: ['blur(20px)', 'blur(0)'], //ぼかしがかかった画像の霧が少しずつ晴れて行く
    // opacity: [0, 1],
    // rotate: ['x 90deg', 0], //横軸に90度回転
    // translate: ['0 50px', 0], //一つずつ下から浮き上がってくる
    // rotate: ['5deg', 0], //回転
    // scale: [1.1, 1], //拡大の指定
};
const options = {
  duration: 800, //0.8秒
  delay: i * 1000, //1.0秒
  fill: 'forwards',
};
items[i].animate(keyframes, options);
}

