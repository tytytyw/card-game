const easy = document.querySelector(".level__easy");
const medium = document.querySelector(".level__medium");
const hard = document.querySelector(".level__hard");
const btn = document.querySelector(".level__btn");
const levelMenu = document.querySelector(".level");
const content = '<div class="flip-card-inner"><div class="flip-card-front"><img src="img/cartback.svg"></div><div class="flip-card-back"></div></div>';
const audioFlip = document.querySelector("#flip");
const audioCheck = document.querySelector("#check");
const audioWin = document.querySelector("#win");
let level = undefined;
let cardIsFlip = false;
function levelChecked (lvl, value) {
    easy.classList.remove('level__checked')
    medium.classList.remove('level__checked')
    hard.classList.remove('level__checked')
    lvl.classList.add('level__checked')
    btn.innerHTML = 'Начать Игру'
    level = value
    audioCheck.play()
}
easy.onclick = () => {
    levelChecked(easy, 3)
}
medium.onclick = () => {
    levelChecked(medium, 6)
}
hard.onclick = () => {
    levelChecked(hard, 10)
}
btn.onclick = () => {
    if (level !== undefined) {
        const random = Math.floor(Math.random() * level);
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
            const div = document.createElement('div');
            div.innerHTML = content;
            cardArea.appendChild(div);
            div.className = 'flip-card';
            }
            let flip =  cardArea.querySelectorAll('.flip-card');
            flip.innerHTML = content;
            let flipInner =  cardArea.querySelectorAll('.flip-card-inner');
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
