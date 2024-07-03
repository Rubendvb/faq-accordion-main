let acc = document.querySelectorAll('.accordion')
let panels = document.querySelectorAll('.panel')
let imgs = document.querySelectorAll('.img__plus')

acc.forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    const btn = e.currentTarget

    btn.classList.toggle('active')

    if (panels[index].style.maxHeight) {
      panels[index].style.maxHeight = null
      panels[index].style.marginTop = '0'
      imgs[index].setAttribute('src', '/images/icon-plus.svg')
    } else {
      panels[index].style.maxHeight = panels[index].scrollHeight + 'px'
      panels[index].style.marginTop = '28px'
      imgs[index].setAttribute('src', '/images/icon-minus.svg')
    }
  })
})
