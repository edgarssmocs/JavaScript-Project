const textboxes = document.querySelectorAll('.js-textbox')
const left = document.querySelector('.js-left')
const right = document.querySelector('.js-right')
const sliderdots = document.querySelectorAll('.js-dot')
let activeIndex = 0
let sliderdotIndex = 0

const removeActivetextbox = () => {
    textboxes.forEach((textbox) => {
        textbox.classList.remove('active')
})
}

const removesliderdot = () => {
    sliderdots.forEach((dot) => {
    dot.classList.remove('active')
})
}


right.addEventListener('click', () => {
    removeActivetextbox()
    removesliderdot()


    if (activeIndex === textboxes.length - 1) {
        activeIndex = 0
    }
    else {
        activeIndex = activeIndex + 1
        }
    
        sliderdotsIndex = activeIndex

    textboxes[activeIndex].classList.add('active')
    sliderdots[sliderdotsIndex].classList.add('active')


})


left.addEventListener('click', () => {
removeActivetextbox()
removesliderdot()


if (activeIndex === 0) {
    activeIndex = textboxes.length - 1
}
else {
activeIndex = activeIndex - 1
}
sliderdotsIndex = activeIndex
textboxes[activeIndex].classList.add('active')
sliderdots[sliderdotsIndex].classList.add('active')

})