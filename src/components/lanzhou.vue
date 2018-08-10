<template>
  <div class="journey">
    <div class="app__content">
      <div class="layer hidden"></div>
      <g-swiper class="gswiper-container" ref="outerSwiper" :options="swiperOption">
        <g-slider slide-id="page-preload" class="page page-preload">
          <preload
            :background="'rgb(0, 0, 0)'"
            @complete="handlePreloadComplete"
          ></preload>
        </g-slider>
        <g-slider slide-id="page1" class="page page1" scroll="disable">
          <div class="page1-content">
            <div class="logo logo1"></div>
            <div class="page1-text"></div>
            <button class="btn btn1" @click="handleShowPage2">加入会员</button>
            <div class="privilege-text"></div>
          </div>
        </g-slider>
        <g-slider slide-id="page2" class="page page2" scroll="disable">
          <div class="page2-content">
            <div class="page2-title"></div>
            <div class="page2-enter"></div>
            <div class="page2-form">
              <input v-model="mobile" class="input-number" type="number" placeholder="手机号码">
              <div class="page2-code">
                <input v-model="code" class="input-code" type="number" placeholder="请输入您获取的验证码">
                <div class="code" @click="handleGetCode">
                  {{sendCodeEnabled ? '获取验证码' : `${codeTime}s`}}
                </div>
              </div>
              <div class="page2-agree">
                <label class="label">
                  <input v-model="page2ItemConfirm" class="page2-checkbox" type="checkbox">
                  <div class="page2-protocol"></div>
                </label>
              </div>
              <button class="btn btn2" @click="handleShowPage3">提交</button>
            </div>
          </div>
        </g-slider>

        <g-slider slide-id="page3" class="page page3" scroll="disable">
          <div class="page3-content">
            <div class="logo logo2"></div>
            <div class="page3-form">
              <input v-model="mobile" class="page3-input1" type="text" disabled>
              <input v-model="name" class="page3-input2" type="text" placeholder="请输入您的姓名">
              <select v-model="gender" class="page3-select1">
                <option value="">请选择您的性别</option>
                <option value="1">男</option>
                <option value="0">女</option>
              </select>
              <div class="page3-group1">
                <div class="group group1">
                  <select ref="yearRef" class="select1" v-model="year">
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                  </select>
                  <span>年</span>
                </div>
                <div class="group group2">
                  <select ref="monthRef" class="select1" v-model="month">
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                  </select>
                  <span>月</span>
                </div>
                <div class="group group3">
                  <select ref="dayRef" class="select1" v-model="day">
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                  </select>
                  <span>日</span>
                </div>
              </div>
              <div class="page3-group2">
                <div class="group group4">
                  <select ref="provinceRef" class="select2" v-model="province">

                  </select>
                  <span>省</span>
                </div>
                <div class="group group5">
                  <select ref="cityRef" class="select2" v-model="city">

                  </select>
                  <span>市</span>
                </div>
              </div>
              <div class="page2-agree">
                <label class="label">
                  <input v-model="page3ItemConfirm" class="page2-checkbox" type="checkbox">
                  <div class="page2-protocol"></div>
                </label>
              </div>
              <button class="btn btn3" @click="handlePage3Submit">提交</button>
            </div>
          </div>
        </g-slider>

        <g-slider slide-id="page4" class="page page4" scroll="disable">
          <div class="page4-content">
            <div class="logo logo2"></div>
            <div class="page4-glass">
              <div class="page4-style">
                <p class="page4-text page4-text1"></p>
                <ul class="page4-imgs">
                  <li
                    class="q"
                    v-for="m in styleData"
                    :key="m.id"
                    :class="{active: m.active, [`q${m.id}`]: true}"
                    @click="toggleActive(m, 'style')"
                  ></li>
                </ul>
              </div>
              <div class="page4-character">
                <p class="page4-text page4-text2"></p>
                <ul class="page4-imgs">
                  <li class="n"
                      v-for="n in typeData"
                      :key="n.id"
                      :class="{active: n.active, [`n${n.id}`]: true}"
                      @click="toggleActive(n, 'type')"
                  ></li>
                </ul>
              </div>
              <button class="btn btn4" @click="handlePage4Submit">提交</button>
            </div>
          </div>
        </g-slider>

        <g-slider slide-id="page5" class="page page5" scroll="disable">
          <div class="page5-content">
            <div class="logo logo2"></div>
            <div class="page5-text"></div>
            <div class="page5-group">
              <p class="page5-house99">
                <span>欢迎成为</span>
                <span class="house99"></span>
              </p>
              <p class="page5-number">
                <span>第 <span>{{memberNum}}</span> 位秘社社员</span>
              </p>
            </div>
            <div class="page5-card"></div>
          </div>
        </g-slider>
      </g-swiper>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
    props: {},
    created () {

    },
    mounted () {
      const yearRef = this.$refs.yearRef
      const monthRef = this.$refs.monthRef
      const dayRef = this.$refs.dayRef
      const provinceRef = this.$refs.provinceRef
      const cityRef = this.$refs.cityRef

      new AreaSelector(provinceRef, cityRef).init()

      // eslint-disable-next-line
      new DatePicker({
        year: yearRef,
        month: monthRef,
        day: dayRef,
        max: new Date()
      })
    },
    data () {
      return {
        swiperOption: {
          direction: 'vertical',
          effect: 'fade',
          keyboard: true
        },

        codeTime: 59,

        codeTimer: 0,

        sendCodeEnabled: true,

        // page2中输入的手机号码
        mobile: '',

        // page2输入的验证码
        code: '',

        page2ItemConfirm: false,
        page3ItemConfirm: false,

        // page3姓名
        name: '',

        // page3性别
        gender: '',

        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        day: new Date().getDate(),

        province: '',
        city: '',

        styleSelect: [], // 风格标签

        typeSelect: [], // 品类标签

        styleData: [
          {
            id: 1,
            title: '英伦',
            active: false
          },
          {
            id: 2,
            title: '简约',
            active: false
          },
          {
            id: 3,
            title: '街潮',
            active: false
          },
          {
            id: 4,
            title: '商务',
            active: false
          },
          {
            id: 5,
            title: '古典',
            active: false
          },
          {
            id: 6,
            title: '清新',
            active: false
          }
        ],

        typeData: [
          {
            id: 1,
            title: '护肤',
            active: false
          },
          {
            id: 2,
            title: '护发',
            active: false
          },
          {
            id: 3,
            title: '头发造型',
            active: false
          },
          {
            id: 4,
            title: '剃须',
            active: false
          },
          {
            id: 5,
            title: '身体护理',
            active: false
          },
          {
            id: 6,
            title: '洁净',
            active: false
          }
        ],

        // page6第几位会员
        memberNum: 0
      }
    },
    computed: {
      gSwiper () {
        return this.$refs.outerSwiper
      }
    },
    methods: {
      handlePreloadComplete () {
        const userId = window.userId
        if (userId) {
          this.memberNum = userId
          this.showPage('page5')
          return
        }
        this.showPage('page1')
      },

      showPage (pageId) {
        this.gSwiper.gSlideTo(pageId)
      },

      handleShowPage2 () {
        this.showPage('page2')
      },

      // 获取验证码
      async handleGetCode () {
        const mobile = this.mobile
        const app = this.$app
        const axios = this.$axios
        if (!this.sendCodeEnabled) {
          return
        }
        if (!isValidPhone(mobile)) {
          window.alert('手机号格式不正确!')
          return
        }
        try {
          // eslint-disable-next-line
          const res = await axios.post(app.url(apis.getVerifyCode), { mobile }, { loading: true })
          this.startCodeTimer()
        } catch (e) {
          this.showErrors(e)
        }
      },

      startCodeTimer () {
        const self = this
        this.sendCodeEnabled = false
        clearInterval(this.codeTimer)
        this.codeTimer = setInterval(function () {
          self.codeTime = --self.codeTime
          if (self.codeTime === 0) {
            clearInterval(self.codeTimer)
            self.codeTime = 59
            self.sendCodeEnabled = true
          }
        }, 1000)
      },

      // page2点击提交
      async handleShowPage3 () {
        const mobile = this.mobile
        if (!isValidPhone(mobile)) {
          window.alert('手机号格式不正确!')
          return
        }
        const code = this.code
        if (!code) {
          window.alert('请输入验证码')
          return
        }

        if (!this.page2ItemConfirm) {
          const confirm = window.confirm('是否同意隐私条款声明？')
          if (confirm) {
            this.page2ItemConfirm = true
          } else {
            return
          }
        }

        const app = this.$app
        try {
          // eslint-disable-next-line
          const res = await this.$axios.post(
            app.url(apis.postMobile),
            {
              mobile,
              code
            },
            { loading: true }
          )
          this.showPage('page3')
        } catch (e) {
          this.handleError(e)
        }
      },

      // page3提交
      async handlePage3Submit () {
        const {
          name,
          gender,
          year,
          month,
          day,
          province,
          city
        } = this

        if (!name) {
          window.alert('请输入姓名')
          return
        }

        if (gender === '') {
          window.alert('请选择性别')
          return
        }

        if (!year || !month || !day) {
          window.alert('请选择出生年月')
          return
        }

        if (!province || !city) {
          window.alert('请选择省市')
          return
        }

        if (!this.page3ItemConfirm) {
          const confirm = window.confirm('是否同意隐私条款声明？')
          if (confirm) {
            this.page3ItemConfirm = true
          } else {
            return
          }
        }

        const app = this.$app
        const axios = this.$axios
        try {
          // eslint-disable-next-line
          const res = await axios.post(
            app.url(apis.postInfo),
            {
              name,
              gender,
              province,
              city,
              'birthdate': new Date(`${year}-${month}-${day}`)
            },
            {
              loading: true
            }
          )
          this.showPage('page4')
        } catch (e) {

        }
      },

      async handlePage4Submit () {
        const {
          styleSelect,
          typeSelect
        } = this
        if (!styleSelect.length || !typeSelect.length) {
          window.alert('请选择感兴趣的标签')
          return
        }
        const app = this.$app
        const axios = this.$axios
        try {
          const res = await axios.post(
            app.url(apis.postTag),
            {
              style: styleSelect.join(','),
              category: typeSelect.join(',')
            },
            {
              loading: true
            }
          )
          this.showPage('page5')
          this.memberNum = res.data.data
        } catch (e) {
          this.showErrors(e)
        }
      },

      toggleActive (item, type) {
        this[`${type}Data`] = this[`${type}Data`].map(data => {
          if (data.id === item.id) {
            if (!data.active) {
              if (this[`${type}Select`].length < 3) {
                this[`${type}Select`].push(data.title)
                return {
                  ...data,
                  active: true
                }
              }
            } else {
              this[`${type}Select`] = this[`${type}Select`].filter(d => data.title !== d)
              return {
                ...data,
                active: false
              }
            }
          }
          return data
        })
      },

      handleError (e, cb) {
        const resData = e.response.data
        window.alert(resData.msg)
        cb && cb()
      }
    }
  }
</script>

<style lang="scss" scoped>
  /* .journey{
    background: url('../assets/images/beef.jpg') no-repeat top center;
    background-size: cover;
    height:100vh;
  } */
</style>
