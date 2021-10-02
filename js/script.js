'use strict';

const box = document.getElementById('box'),
      buttons = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
box.style.cssText = 'background-color:blue; width: 300px';

buttons[1].style.borderRadius = '100%';
circles[2].style.backgroundColor = 'purple';

// for (let i=0; i<hearts.length; i++){
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'black';
});

const div = document.createElement('div');
// const text = document.createTextNode('Tyt bil ya');

div.classList.add('black');
wrapper.append(div);
// wrapper.prepend(div);
// hearts[0].after(div);
// circles[0].remove();
// hearts[1].replaceWith(circles[0]);

//ystarevshie komandi
// wrapper.appendChild(div);
// wrapper.insertBefore(div, hearts[0]);
// wrapper.removeChild(hearts[1]);
// wrapper.replaceChild(circles[2], hearts[2]);

div.innerHTML = '<h1>Hello World</h1>';
// div.textContent = 'Hello';
div.insertAdjacentHTML('afterend', '<h2>hello!!!</h2>');










