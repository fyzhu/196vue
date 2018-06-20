<template>

    <section class="real-app">
        <input 
            type="text"
            class="add-input"
            autofocus="autofocus"
            placeholder="接下去要做什么？"
            @keyup.enter="addTodo"
        >
        <item 
            :todo="todo"
            v-for="todo in filteredTodos"
            :key="todo.id"
            @del="deleteTodo"
        />        
        <tabs 
            :filter="filter" 
            :todos="todos" 
            @toggle="toggleFilter"
            @clearAllCompleted="clearAllCompleted"
        >
        </tabs>
        <router-view/>
    </section>
</template>
<script>
import Item from './item.vue'
import Tabs from './tabs.vue'
let id = 0
export default {
  beforeRouteEnter (to, from, next) {
    console.log('todo before enter')
    next(vm => {
      console.log('after enter this.id is', vm.id)
    })
  },
  beforeRouteUpdate (to, from, next) {
    console.log('todo before update')
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('todo before Leave')
    if (global.confirm('are you sure?')) {
      next()
    }
    // next()
  },
  props: ['id'],
  // mounted () {
  //   console.log(this.id)
  // },
  data () {
    return {
      todos: [],
      filter: 'all'
    }
  },
  components: {
    Item,
    Tabs
  },
  computed: {
    filteredTodos () {
      if (this.filter === 'all') {
        return this.todos
      }
      const completed = this.filter === 'completed'
      return this.todos.filter(todo => completed === todo.completed)
    }
  },
  methods: {
    addTodo (e) {
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      })
      e.target.value = ''
    },
    deleteTodo (id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
    },
    toggleFilter (state) {
      this.filter = state
    },
    clearAllCompleted () {
      this.todos = this.todos.filter(todo => !todo.completed)
    }
  }
}
</script>
<style lang="stylus" scoped>
section 
    text-align center
     width 600px
    input
        width 100%
        margin 0 auto
        height 50px
        text-indent 20px
        font-size 20px
        border 0

</style>
