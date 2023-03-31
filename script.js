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
    } else {
      clickRightCounter--
      clickRightCounter = 0
    }
  })
})

// Click for left arrow
leftArrows.forEach((arrow, i) => {
  let clickLeftCounter = 0
  arrow.addEventListener('click', () => {
    clickLeftCounter--
    if (clickLeftCounter >= 0.5) {
      movieList[i].style.transform = `translateX(${
        movieList[i].computedStyleMap().get('transform')[0].x.value + 300
      }px)`
    } else {
      clickLeftCounter++
      movieList[i].style.transform = 'translateX(0)'
      clickLeftCounter = 0
    }
  })
})
