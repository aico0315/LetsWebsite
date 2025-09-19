'use strict';

const heading = document.querySelector('#heading');

const keyframes = {
  fontSize: ['1rem', '5rem'],
  opacity: [0, 1],
  translate: ['0 100px', 0],
  color: ['#b89999ff','#afdd46ff', '#d31313ff', '#fb01d5ff'],
};

const option = {
  duration: 4000, //単位はミリ秒  1秒 = 1000ミリ秒 ※「duration」は必須項目
  // fill: 'forwards', //「fill」は、アニメーションが始まる前や終わった後の要素の状態を制御するプロパティ
  //「forwards」は、アニメーションが終了した後、最終キーフレームのスタイルを要素に適用し続けるよう指示
  // easing: 'steps(4)',
  direction: 'alternate',
  easing: 'ease-in-out',
  iterations: Infinity,
}

heading.animate(keyframes, option);
