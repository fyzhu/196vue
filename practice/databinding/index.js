import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      {{isActive ? 'active' : 'not active'}}
      {{arr.join(' ')}}
      {{Date.now()}}
      {{html}}
      <div :id='aaa' @click="handleClick">
        <p v-html='html'></p>
      </div>
      <div :class="{ active: !isActive}">
      </div>
    </div>
  `,
  data: {
    isActive: false,
    arr: [1, 2, 3],
    html: '<span>123</span>',
    aaa: 'main'
  },
  methods: {
    handleClick () {
      alert('test') // eslint-disable-line
    }
  }

})
