const arrows = document.querySelectorAll('.arrow')
const movieList = document.querySelectorAll('.movie-list')

// Click for arrow
arrows.forEach((arrow, i) => {
  const movieItems = movieList[i].querySelectorAll('img').length
  let clickCounter = 0
  arrow.addEventListener('click', () => {
    const ratio = Math.floor(window.innerWidth / 241)
    clickCounter++
    if (movieItems - (5 + clickCounter) + (5 - ratio) >= 0) {
      movieList[i].style.transform = `translateX(${
        movieList[i].computedStyleMap().get('transform')[0].x.value - 310
      }px)` // moves to the right
    } else {
      movieList[i].style.transform = 'translateX(0)' // moving back to the start
      clickCounter = 0 // to reset
    }
  })
  // put 2 more movies
})

// toggle for the dark/light mode
const toggleItems =
  '.container,.sidebar,#navbar,.menu-list,.profile-container,.search,.movies,.most-popular,.movie-title,.toggle,.arrow '

const toggleBall = document.querySelector('.toggle-ball')
const items = document.querySelectorAll(toggleItems)

toggleBall.addEventListener('click', () => {
  items.forEach((item) => {
    item.classList.toggle('active')
    item.style.transition = '0.5s all ease-in-out'
  })
  toggleBall.classList.toggle('active')
})

// hover effect for 2 images

const left = document.querySelectorAll('.left, .bottom-content-left')
const right = document.querySelectorAll('.right, .bottom-content-right')
const imageLeft = document.querySelector('.left')
const imageRight = document.querySelector('.right')
const contentLeft = document.querySelector('.bottom-content-left')
const contentRight = document.querySelector('.bottom-content-right')

left.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    imageLeft.classList.add('active')
    contentLeft.classList.add('active')
  })
})

left.forEach((item) => {
  item.addEventListener('mouseleave', () => {
    imageLeft.classList.remove('active')
    contentLeft.classList.remove('active')
  })
})

right.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    imageRight.classList.add('active')
    contentRight.classList.add('active')
  })
})

right.forEach((item) => {
  item.addEventListener('mouseleave', () => {
    imageRight.classList.remove('active')
    contentRight.classList.remove('active')
  })
})
