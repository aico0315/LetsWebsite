'use strict';

const menu = document.querySelector('#menu');

const lists = [
  {name: 'イチゴ',
   img: 'strawberry.jpg',
   price: 450,
  },
  {name: 'ライム',
   img: 'lime.jpg',
   price: 400,
  },
  {name: 'マンゴー',
   img: 'mango.jpg',
   price: 500,
  },
  {name: 'レモン',
   img: 'lemon.jpg',
   price: 400,
  },
  {name: 'イチジク',
   img: 'fig.jpg',
   price: 500,
  },
  {name: 'リンゴ',
   img: 'apple.jpg',
   price: 400,
  },
];


for(let i = 0; i < lists.length; i++){
  const {name, img, price} = lists[i];
  const content = `<div><img src="images/${img}" alt=""><h2>${name}</h2><p>${price}円</p></div>`;
  menu.insertAdjacentHTML('beforeend', content);
}
//   <div><img src="${lists[1]}" alt=""></div>
//   <div><img src="${lists[2]}" alt=""></div>
//   <div><img src="${lists[3]}" alt=""></div>
//   <div><img src="${lists[4]}" alt=""></div>
//   <div><img src="${lists[5]}" alt=""></div>
// `;
// menu.textContent = content;