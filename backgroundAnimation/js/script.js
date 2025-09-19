'use strict';

const heading = document.querySelector('#heading');

const keyframe = {
  color: ['transparent', '#fff'], //transparent 「透明な」などの意味
  backgroundPosition: ['100% 0', '0 0'], //2色の境目を動かすコード
};

const options = {
  duration: 3000, //再生時間
  easing: 'ease',
};

heading.animate(keyframe, options);
