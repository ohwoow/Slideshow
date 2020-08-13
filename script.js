(function () {

  class SlideShow {
    constructor(startIndex = 0, element) {
      this.startIndex = startIndex
      this.currentIndex = this.startIndex
      this.element = element
      this.slides = this.element.querySelectorAll('.slide')
      this.setActiveSlide()
      this.next()
      this.prev()
    }

    setActiveSlide() {
      this.slides.forEach((item, index) => {
        if (index === this.currentIndex) {
          item.classList.add('_active')
        } else {
          item.classList.remove('_active')
        }
      })
    }
    
    next() {
      let nextBtn = this.element.querySelector('[data-way="next"]')

      nextBtn.addEventListener('click', () => {
        if (this.currentIndex === this.slides.length - 1) {
          this.currentIndex = 0
        } else {
          this.currentIndex++
          console.log(this.currentIndex)
        }
        this.setActiveSlide()
      })
    }
    
    prev() {
      let prevBtn = this.element.querySelector('[data-way="prev"]')

      prevBtn.addEventListener('click', () => {
        if (this.currentIndex === 0) {
          this.currentIndex = this.slides.length - 1
        } else {
          this.currentIndex--
        }
        this.setActiveSlide()
      })
    }
  }
  
  const slideshowElem = document.querySelectorAll('.slideshow')


  slideshowElem.forEach(item => {
    new SlideShow(0, item)
  })
  
}())






















































