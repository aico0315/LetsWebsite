'use strict';

const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');
// console.log(document.querySelector('#colorPicker').value); //valueとは「値」のこと。変数や定数に格納されるデータそのものを指す

const colorBg = () => {
  document.body.style.backgroundColor = color.value; //選択した色を背景色に設定
  if(color.value === '#ffffff') { //この条件を満たした時だけに実行される処理
    text.textContent = `カラーコード：${color.value}(white)`; //カラーコードと(white)の文字を表示
  } else if(color.value === '#000000') {
    text.textContent = `カラーコード：${color.value}(black)`; //カラーコードと(black)の文字を表示
  } else if(color.value === '#ff0000') {
    text.textContent = `カラーコード：${color.value}(red)`;
  } else if(color.value === '#0000ff') {
    text.textContent = `カラーコード：${color.value}(blue)`;
  } else { //条件を満たしていない時の処理
    text.textContent = `カラーコード：${color.value}`; //カラーコードのみを表示
    }
  }

//カラーピッカーが変更されたら colorBgを発動させる
color.addEventListener('input', colorBg);
