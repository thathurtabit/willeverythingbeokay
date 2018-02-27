const title = "Will everything be ok?"
const titleArray = [...title]
const titleElement = document.getElementsByTagName('h1')[0]

titleArray.map((letter, index) => {
   return titleElement.insertAdjacentHTML('beforeend', `<span>${letter}</span`)
})

let newTitleArray = titleElement.getElementsByTagName('span')
let animateArray = [...newTitleArray]

animateArray.map((letter, index) => {
    letter.animate(
        [
            { transform: 'translateY(0)', opacity: 0.5 },
            { transform: 'translateY(-30px)', opacity: 1 },
            { transform: 'translateY(0)', opacity: 0.5 },
        ], {
            duration: 3000,
            delay: index * 100,
            iterations: Infinity
        }
    )
})
