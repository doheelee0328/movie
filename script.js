const arrows = document.querySelectorAll('.right')
const leftArrows = document.querySelectorAll('.left')
const movieList = document.querySelectorAll('.movie-list')

// Click for right arrow
arrows.forEach((arrow, i) => {
  const movieItems = movieList[i].querySelectorAll('img').length
  let clickRightCounter = 0
  arrow.addEventListener('click', () => {
    clickRightCounter++
    if (movieItems - (3 + clickRightCounter) > 0) {
      movieList[i].style.transform = `translateX(${
        movieList[i].computedStyleMap().get('transform')[0].x.value - 300
      }px)`
    }
  })
})

// Click for left arrow
leftArrows.forEach((arrow, i) => {
  let clickLeftCounter = 0
  arrow.addEventListener('click', () => {
    clickLeftCounter--
    if (clickLeftCounter >= 1) {
      movieList[i].style.transform = `translateX(${
        movieList[i].computedStyleMap().get('transform')[0].x.value + 300
      }px)`
    } else {
      movieList[i].style.transform = 'translateX(0)'
      clickLeftCounter = 0
    }
  })
})

// toggle for the dark/light mode
const toggleBall = document.querySelector('.toggle-ball')
const items = document.querySelectorAll(
  '.container,.sidebar,#navbar,.menu-list,.profile-container,.search,.movies,.most-popular,.movie-title,.toggle,.right,.left '
)

toggleBall.addEventListener('click', () => {
  items.forEach((item) => {
    item.classList.toggle('active')
    item.style.transition = '0.5s all ease-in-out'
  })
  toggleBall.classList.toggle('active')
})
