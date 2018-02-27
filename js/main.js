const body = document.getElementsByTagName('body')[0];
const titleElement = document.getElementById('title');
const titleText = titleElement.innerHTML;
const titleArray = [...titleText];
const button = document.getElementById('findout');

// Clear it down (JS will replace it)
titleElement.innerHTML = '';

titleArray.map((letter, index) => {
   return titleElement.insertAdjacentHTML('beforeend', `<span>${letter}</span`)
})

let newTitleArray = titleElement.getElementsByTagName('span')
let animateArray = [...newTitleArray]

animateArray.map((letter, index) => {
    letter.animate(
        [
            { transform: 'translateY(0)', opacity: 0.25 },
            { transform: 'translateY(-30px)', opacity: 1 },
            { transform: 'translateY(0)', opacity: 0.25 },
        ], {
            duration: 3000,
            delay: index * 100,
            iterations: Infinity
        }
    )
})


button.addEventListener('mouseover', () => {
    let bgToggle = setInterval(() => {
        body.classList.toggle('hovered');
    }, 10);
});

button.addEventListener('mouseout', () => {
   window.clearInterval(bgToggle);
});