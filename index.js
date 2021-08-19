const refs = {
    body: document.querySelector("body"),
    form: document.querySelector(".form"),
    input: document.querySelector(".form-input"),
    button: document.querySelector(".enter-btn"),
    textContainer: document.querySelector(".text-container"),
}

refs.form.addEventListener('submit', textRender);
let targetLetter;
let move = false;

function textRender(evt) {
    evt.preventDefault();
  
    const string = refs.input.value;
    const array = string.split('');
    const fragment = new DocumentFragment();
    refs.textContainer.innerHTML = '';
  
    array.map((item) => {
        const span = document.createElement('span')
        span.innerHTML = item;
        fragment.appendChild(span);
    } )
    refs.textContainer.append(fragment);

    const letterArray = [...refs.textContainer.children];
    letterArray.map((item) => item.addEventListener('click', (evt) => {
        targetLetter = evt.target;
        targetLetter.classList.toggle('clicked');
         console.log(targetLetter);
        if (targetLetter.className === 'clicked') {
            move = true;
            refs.body.addEventListener('mousemove', onMouseMove);

        } else {
            move = false;
            refs.body.removeEventListener('mousemove', onMouseMove);
            
        }
    }))  
}

function onMouseMove(evt) {
    if (move === true) {
        targetLetter.style.position = 'absolute';
        targetLetter.style.left = 0;
        targetLetter.style.top = 0;
        targetLetter.style.left = evt.pageX + 'px';
        targetLetter.style.top = evt.pageY + 'px';
    }
}