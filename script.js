const arrows = document.querySelectorAll('.arrow')
const movieList = document.querySelectorAll('.movie-list')

// Click for arrow
arrows.forEach((arrow, i) => {
  const movieItems = movieList[i].querySelectorAll('img').length
  let clickCounter = 0
  arrow.addEventListener('click', () => {
    clickCounter++
    if (movieItems - (5 + clickCounter) >= 0) {
      movieList[i].style.transform = `translateX(${
        movieList[i].computedStyleMap().get('transform')[0].x.value - 300
      }px)` // moves to the right
    } else {
      movieList[i].style.transform = 'translateX(0)' // moving back to the start
      clickCounter = 0 // to reset
    }
  })
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

const contentLeft = document.querySelector('.contentLeft')
const contentRight = document.querySelector('.contentRight')
const left = document.querySelector('.left')
const right = document.querySelector('.right')

left.addEventListener('mouseenter', () => {
  contentLeft.classList.add('active')
})
left.addEventListener('mouseleave', () => {
  contentLeft.classList.remove('active')
})

right.addEventListener('mouseenter', () => {
  contentRight.classList.add('active')
})

right.addEventListener('mouseleave', () => {
  contentRight.classList.remove('active')
})
