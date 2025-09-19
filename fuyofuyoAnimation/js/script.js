'use strict';

const heading = document.querySelector('#heading');

const keyframe = {
  borderRadius: [
    '20% 50% 50% 70%/ 50% 50% 70% 50%',
    '50% 20% 50% 50%/ 40% 40% 60% 60%',
    '50% 40% 20% 40%/ 40% 50% 50% 80%',
    '50% 50% 50% 20%/ 40% 40% 60% 60%',
  ],
};

const options = {
  duration: 8000,
  direction: 'alternate', //アニメーションを実行する方向
  iterations: Infinity,
};

heading.animate(keyframe, options);