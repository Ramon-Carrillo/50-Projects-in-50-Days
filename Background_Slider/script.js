const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

const setBackgroundToBody = () => {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

setBackgroundToBody()

const setActiveSlide = () => {
  slides.forEach((slide) => slide.classList.remove('active'))
  slides[activeSlide].classList.add('active')
}

rightBtn.addEventListener('click', () => {
  activeSlide++
  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }
  setBackgroundToBody()
  setActiveSlide()
})

leftBtn.addEventListener('click', () => {
  activeSlide--
  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }
  setBackgroundToBody()
  setActiveSlide()
})
