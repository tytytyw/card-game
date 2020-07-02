const easy = document.querySelector(".level__easy"),
      medium = document.querySelector(".level__medium"),
      hard = document.querySelector(".level__hard"),
      btn = document.querySelector(".level__btn"),
      levelMenu = document.querySelector(".level")
      content = '<div class="flip-card-inner"><div class="flip-card-front"><img src="img/cartback.svg"></div><div class="flip-card-back"></div></div>';
const audioStart = document.querySelector("#start"),
      audioFlip = document.querySelector("#flip"),
      audioCheck = document.querySelector("#check"),
      audioWin = document.querySelector("#win");
let level,
	random,
	div,
    cardIsFlip = false;
function Random(min, max) {
    return random = Math.floor(Math.random() * (max - min)) + min;
};
easy.onclick = () => {
	easy.classList.add('level__checked')
	medium.classList.remove('level__checked')
	hard.classList.remove('level__checked')
	btn.innerHTML = 'Начать Игру'
	level = 3;
    audioCheck.play();
};
medium.onclick = () => {
	medium.classList.add('level__checked')
	easy.classList.remove('level__checked')
	hard.classList.remove('level__checked')
	btn.innerHTML = 'Начать Игру'
    level = 6;
    audioCheck.play();
};
hard.onclick = () => {
	hard.classList.add('level__checked')
	medium.classList.remove('level__checked')
	easy.classList.remove('level__checked')
	btn.innerHTML = 'Начать Игру'
	level = 10;
    audioCheck.play();
};
btn.onclick = () => {
	if (level !== undefined) {
    	levelMenu.classList.add('nonOpacity');
        setTimeout(() => {
        	levelMenu.classList.add('hiden')
        	}, 1000)
        setTimeout(() => {
        	document.body.innerHTML = '<div id="card_area"></div>'
        	let cardArea = document.querySelector('#card_area');
        	for (let i = 0; i < level; i++) {
        		if (level / i == 2 && window.innerWidth > 650 && level == 10) {
        			let br = document.createElement('br')
        			cardArea.appendChild(br);
        		}
                if (level / i == 2 && level !== 10) {
                    let br = document.createElement('br')
                    cardArea.appendChild(br);
                }
        	div = document.createElement('div');
        	div.innerHTML = content;
        	cardArea.appendChild(div);
        	div.className = 'flip-card'
        	}
        	let flip =  cardArea.querySelectorAll('.flip-card');
        	flip.innerHTML = content;
        	let flipInner =  cardArea.querySelectorAll('.flip-card-inner');
        	Random(0, level);
        	flipInner[random].querySelector('.flip-card-back').classList.add('bag')
        	for (let p = 0; p < level; p++){
        		flip[p].onclick = () => {
                    
                    if (cardIsFlip !== true){
                        audioFlip.play()
                    }

                    if (random === p ) {
                        setTimeout(() => audioWin.play(), 1000);
                    }

                if (cardIsFlip !== true) {
                flip[p].querySelector('.flip-card-inner').classList.add('active');
                cardIsFlip = true;
                }

                document.querySelectorAll('.flip-card-front').forEach(function (item) {
                    item.classList.add('flip-card-front_over')
                });
    			setTimeout(() => {
                    document.body.onclick = () => {
                    setTimeout(() => window.location.reload(), 700);
                    document.body.classList.add('nonOpacity');
                    }
                }, 300)};
    	   }
        }, 100)
    }
	else{
		btn.innerHTML = 'Выберите уровень';
        audioCheck.play();
	}
}
