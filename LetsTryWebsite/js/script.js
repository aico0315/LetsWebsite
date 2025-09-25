'use strict';

// ローディングから画面遷移
// ===========================================
const loadingAreaGray = document.querySelector('#loading');
const loadingAreaGreen = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading p');

const loadingAreaLeft = document.querySelector('#loading-left');
const loadingAreaRight = document.querySelector('#loading-right');

window.addEventListener('load', () => {
  //ローディング中（グレースクリーン）
  loadingAreaGray.animate(
    {
      opacity: [1, 0],
      visibility: 'hidden',
    },
    {
      duration: 2000,
      delay: 1200,
      easing: 'ease',
      fill: 'forwards',
    }
  );//ローディングが終わった時の処理(動かす内容,動きの詳細)

  //ローディング中(薄緑スクリーン)
  // loadingAreaGreen.animate(
  //   {
  //     translate: ['0 100vh', '0 0', '0 -100vh']
  //   },
  //   {
  //     duration: 2000,
  //     delay: 800,
  //     easing: 'ease',
  //     fill: 'forwards',
  //   }
  // );

  const keyframe = {
    transform: ['scaleX(1)', 'scaleX(0)']
  };
  const options = {
    duration: 3000,
    delay: 500,
    easing: 'ease',
    fill: 'forwards',
  };

  loadingAreaLeft.animate(keyframe, options);
  loadingAreaRight.animate(keyframe, options);

  //ローディング中テキスト
  loadingText.animate(
    [
      {
        opacity: 1,
        offset: .8,
      },
      {
        opacity: 0,
        offset: 1,
      },
    ],
      {
        duration: 1200,
        easing: 'ease',
        fill: 'forwards',
      }
  );
});