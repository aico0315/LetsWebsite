'use strict'; //全てのコードが厳格モードで実行される

const isAgreed = document.querySelector('#check');
const btn = document.querySelector('#btn');

isAgreed.addEventListener('change', () => {
  btn.disabled = !isAgreed.checked; //「！」を使って効率よく記述する 以下の記述と同じ内容を簡潔に書いたことになる

  // if(isAgreed.checked === true){
  //   btn.disabled = false;
  // } else {
  //   btn.disabled = true;
  // }
});
