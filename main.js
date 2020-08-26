const container = document.querySelector('#container')

document.querySelector('#button-menu').addEventListener('click', () => {
  container.classList.toggle('active')
})

const toggleDrawable = () => {
  if (window.innerWidth <= 768) {
    container.classList.remove('active')
  } else {
    container.classList.add('active')
  }
}

window.addEventListener('resize', () => {
  toggleDrawable()
})

window.addEventListener('load', () => {
  toggleDrawable()
})
