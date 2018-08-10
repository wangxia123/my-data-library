<script>
  import { swiper } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'

  const iOSversion = () => {
    if (/iP(hone|od|ad)/.test(navigator.platform)) {
      // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
      var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/)
      return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)]
    }
  }

  // iOS8以下，对flex支持有bug，.swiper-wrapper容器改为block。
  // 同时，swiper-slide改为float:left;
  const handleIOS8 = (gSwiper) => {
    const iOSVersion = iOSversion()
    if (iOSVersion && iOSVersion[0] <= 8) {
      const $el = gSwiper.$el
      const parentSwiper = gSwiper.swiper
      const parentParam = parentSwiper.params
      const direction = parentParam.direction
      const swiperWrapper = $el.querySelector('.swiper-wrapper')
      swiperWrapper.style.display = 'block'

      if (direction === 'horizontal') {
        const slides = Array.from(swiperWrapper.querySelectorAll('.swiper-slide'))
        swiperWrapper.style.width = slides[0].offsetWidth * slides.length + 'px'
        slides.forEach((slide, i) => {
          slide.style.display = 'inline-block'
          slide.style.float = 'left'
          slide.style.overflow = 'hidden'
        })
      }
    }
  }

  export default {
    name: 'GSwiper',

    extends: swiper,

    components: {
      swiper
    },

    mounted () {
      this.init()
      handleIOS8(this)
    },

    data () {
      return {
        slideIds: {},
        slideScrolls: {}
      }
    },

    methods: {
      init () {
        this.swiper.on('slideChange', this.gSlideChange)

        const {gSlideTo} = this

        this.swiper = Object.assign(this.swiper, {
          gSlideTo
        })

        this.updateGSlide()
        this.updateGSlideState()
      },

      gSlideTo (id) {
        const index = this.slideIds[id]
        if (index === undefined) {
          return console.warn(id + ' 未被定义为slide-id')
        }
        this.swiper.slideTo(index)
      },

      updateGSlide () {
        this.$children.forEach((item, index) => {
          const attrs = item.$vnode.data.attrs
          if (attrs) {
            this.slideIds[attrs['slide-id']] = index
            const scrollValue = attrs['scroll']
            this.slideScrolls[index] = scrollValue || 'both'
          }
        })
      },

      gSlideChange () {
        this.updateGSlideState()
      },

      updateGSlideState () {
        const {swiper, slideScrolls, slideIds} = this
        const activeIndex = swiper.activeIndex
        const entries = Object.entries(slideIds)
        handleIOS8(this)
        entries.forEach((item, index) => {
          if (item[1] === activeIndex) {
            swiper.gActiveId = item[0]
          } else if (index === entries.length - 1) {
            swiper.gActiveId = null
          }
        })

        for (let key in slideScrolls) {
          if (Number(key) === activeIndex) {
            let props = slideScrolls[key]
            if (typeof props === 'function') {
              props = props()
            }
            switch (props) {
              case 'disable':
                swiper.allowTouchMove = false
                break
              case 'prev':
                swiper.allowSlidePrev = false
                break
              case 'next':
                swiper.allowSlideNext = false
                break
              case 'both':
                return this.allowGSlide()
              default:
                return console.warn(props + ' 不是一个 scroll 的有效值')
            }
          }
        }
      },

      allowGSlide () {
        const swiper = this.swiper
        swiper.allowTouchMove = true
        swiper.allowSlidePrev = true
        swiper.allowSlideNext = true
      }
    }
  }
</script>
