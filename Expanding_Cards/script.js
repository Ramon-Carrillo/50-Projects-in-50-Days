const panels = document.querySelectorAll('.panel')

panels.forEach((panel, index) => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
    alert(`Panel ${index + 1} clicked`)
  })
})

removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}

var x = 100

function test() {
  if (false) {
    var x = 199
  }
  console.log(x)
}

test()
