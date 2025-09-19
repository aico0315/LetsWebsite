'use strict';

//①監視ロボットに実行してほしい内容を決める
const showKirin = (entries) => {
  const keyframe = {
    opacity: [0, 1],
    translate: ['200px 0', 0],
  }
  entries[0].target.animate(keyframe, 600);
};

//②新しい名前を付けて監視ロボットを導入する
const kirinObserver = new IntersectionObserver(showKirin);

//③監視ロボットに①で決めた動作内容を指示する
//②の「new IntersectionObserver()」のカッコ内に①で決めた関数名「showKirin」を指定する。

//④監視ロボットに監視対象を教えて実行する
kirinObserver.observe(document.querySelector('#kirin'));