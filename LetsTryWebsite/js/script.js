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

/*
画像ギャラリー
============================================================ */
const mainImage = document.querySelector('.gallery-image img');
const thumbImages = document.querySelectorAll('.gallery-thumbnails img');

for(let i = 0; i < thumbImages.length; i++) {
  thumbImages[i].addEventListener('mouseover', (event) => {
    mainImage.src = event.target.src;
    mainImage.animate({opacity: [0, 1]}, 500);
  });
}

/* 上記のfor文と同じ処理内容 forEach文だとlet i = 0や要素の数などを考えず、直感的に処理をかける
thumbImages.forEach((thumbImage) => {
  thumbImage.addEventListener('mouseover', (event) => {
    mainImage.src = event.target.src
    mainImage.animate({opacity: [0, 1]}, 500);
  });
});
*/

/*
スライドメニュー
================================================ */
const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menuPanel = document.querySelector('#menu-panel');
const menuItems = document.querySelectorAll('#menu-panel li');
const menuOptions = {
  duration: 1400,
  easing: 'ease',
  fill: 'forwards',
}

//メニューを開く
menuOpen.addEventListener('click', () =>{
  // console.log('メニューを開く');
  menuPanel.animate({translate: ['100vw', 0]}, menuOptions);

  //リンクをひとつずつ順に表示
  menuItems.forEach((menuItem, index) => {
    console.log(`${index}番目のリスト`);
    menuItem.animate(
      {
        opacity: [0, 1],
        translate: ['3rem', 0],
      },
      {
        duration: 2400,
        delay: index * 300,
        easing: 'ease',
        fill: "forwards",
      }
    );
  });
});

//メニューを閉じる
menuClose.addEventListener('click', () => {
  menuPanel.animate({translate: [0, '100vw']}, menuOptions);
  menuItems.forEach((menuItem) => {
    menuItem.animate({opacity: [1, 0]}, menuOptions);
  });
});
