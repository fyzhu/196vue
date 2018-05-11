import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
  <div>
    <p>Name: {{name}} </p>
    <p>Name: {{getName()}} </p>
    <p>Number: {{number}}</p>
    <p>fullName: {{fullName}}</p>
    <p><input type="text" v-model="number"></p>
    <p>FisrtName:<input type="text" v-model="firstName"></p>
    <p>LastName:<input type="text" v-model="lastName"></p>
    <p>name:<input type="text" v-model="name"></p>
    <p>obj.a:<input type="text" v-model="obj.a"></p>
  </div>
  `,
  data: {
    firstName: 'Yvan',
    lastName: 'Zhu',
    number: 0,
    fullName: '',
    obj: {
      a: '123'
    }
  },
  computed: {
    name: {
      get () {
        console.log('new name')
        return `${this.firstName} ${this.lastName}`
      },
      set (name) {
        const names = name.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      }
    }
  },
  watch: {
    firstName: {
      handler (newName, oldName) {
        this.fullName = newName + ' ' + this.lastName
      },
      immediate: true
    },
    'obj.a': {
      handler (newName, oldName) {
        console.log('obj.a changed')
      },
      deep: false
    }

  },
  mounted () {
    this.obj = {
      a: '345'
    }
  },
  methods: {
    getName () {
      console.log('getName')
      return `${this.firstName} ${this.lastName}`
    }
  }
})
