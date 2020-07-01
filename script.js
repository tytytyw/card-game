const a = document.querySelector(".level__easy"),
      b = document.querySelector(".level__medium"),
      c = document.querySelector(".level__hard"),
      btn = document.querySelector(".level__btn"),
      levelMenu = document.querySelector(".level");
let level,
	r,
	div;
const ar = '<div class="flip-card-inner"><div class="flip-card-front"><img src="img/cartback.svg"></div><div class="flip-card-back"></div></div>';
function Random(min, max) {
  return r = Math.floor(Math.random() * (max - min)) + min;
};
a.onclick = () => {
	a.classList.add('level__checked')
	b.classList.remove('level__checked')
	c.classList.remove('level__checked')
	btn.innerHTML = 'Начать Игру'
	level = 3
};
b.onclick = () => {
	b.classList.add('level__checked')
	a.classList.remove('level__checked')
	c.classList.remove('level__checked')
	btn.innerHTML = 'Начать Игру'
    level = 6
};
c.onclick = () => {
	c.classList.add('level__checked')
	b.classList.remove('level__checked')
	a.classList.remove('level__checked')
	btn.innerHTML = 'Начать Игру'
	level = 10
};
btn.onclick = () => {
	if (level !== undefined) {
	levelMenu.classList.add('nonOpacity');
    setTimeout(() => {
    	levelMenu.classList.add('hiden')
    	}, 1000)
    setTimeout(() => {
    	document.body.innerHTML = '<div id="card_area"></div>'
    	let el = document.querySelector('#card_area');
    	for (let i = 0; i < level; i++) {
    		if (level / i == 2) {
    			let br = document.createElement('br')
    			el.appendChild(br);
    		}
    	div = document.createElement('div');
    	div.innerHTML = ar;
    	el.appendChild(div);
    	div.className = 'flip-card'
    	}
    	let flip =  el.querySelectorAll('.flip-card');
    	flip.innerHTML = ar;
    	let flipInner =  el.querySelectorAll('.flip-card-inner');
    	Random(0, level);
    	console.log('Баг под картой '+(r+1));
    	flipInner[r].querySelector('.flip-card-back').classList.add('bag')
    	for (let p = 0; p < level; p++){
    		flip[p].onclick = () => {
    			flip[p].querySelector('.flip-card-inner').classList.add('active');
    			setTimeout(() => {document.body.onclick = () => window.location.reload()}, 300);
    		}
    	}
    }, 100)
}
	else{
		btn.innerHTML = 'Выберите уровень'
	}

}

