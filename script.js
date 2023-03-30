const arrows = document.querySelectorAll('.arrow')
const movieList = document.querySelectorAll('.movie-list')
console.log(movieList)

arrows.forEach((arrow, i) => {
  const movieItems = movieList[i].querySelectorAll('img').length
  let clickCounter = 0
  arrow.addEventListener('click', () => {
    clickCounter++
    if (movieItems - (4 + clickCounter) >= 0) {
      movieList[i].style.transform = `translateX(${
        movieList[i].computedStyleMap().get('transform')[0].x.value - 300
      }px)`
    } else {
      movieList[i].style.transform = `translateX(0)`
      clickCounter = 0
    }
  })
})
