const likes = [];
const counter = document.getElementById('counter')
setInterval(() => {
    if (!pagePaused)
    counter.textContent = 1+Number.parseInt(counter.textContent);
},1000)

//id plus, id minus
const likeContainer = document.querySelector('ul')
const likeButton = document.getElementById('heart');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const pauseButton = document.getElementById('pause');
const comments = document.getElementById('comment-form')
const cmInput = document.getElementById('comment-input')
let pagePaused = false;

plusButton.addEventListener('click', (e) => {
    counter.textContent = 1+Number.parseInt(counter.textContent);
})

minusButton.addEventListener('click', (e) => {
    counter.textContent = Number.parseInt(counter.textContent)-1;
})

likeButton.addEventListener('click', (e) => {
    const currentNum = Number.parseInt(counter.textContent);
    const temp = document.getElementById('like-number-'+currentNum);
    if (temp === undefined || temp === null)
    {
        const newLike = document.createElement('li');
        likes[currentNum] = 1;
        newLike.setAttribute('id', 'like-number-'+currentNum)
        newLike.textContent = currentNum + " was liked " + likes[currentNum] + " times";
        likeContainer.appendChild(newLike);
    }
    else
    {
        likes[currentNum]++;
        temp.textContent = temp.textContent = currentNum + " was liked " + likes[currentNum] + " times";
    }
    
})

pauseButton.addEventListener('click', (e) => {
    const allButtons = document.querySelectorAll('button')
    if (!pagePaused)
    {
        pagePaused = true;
        e.target.textContent = 'resume'
        allButtons.forEach(el => {
            if (el.id != 'pause')
                el.disabled = true
        }
            )
    }
    else
    {
        e.target.textContent = 'pause'
        pagePaused = false;
        allButtons.forEach(el => {
            el.disabled = false;
        })
    }
})

comments.addEventListener('submit', (e) => {
    e.preventDefault();
    const newComment = document.createElement('p')
    newComment.textContent = cmInput.value
    comments.appendChild(newComment);
    e.target.reset();
})