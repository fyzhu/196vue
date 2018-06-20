<template>
    <div id="app">
        <div id="cover"></div>
        <Header></Header>
        <p>{{count}}{{fullName}}</p>
        <router-link to="/app/123">app123</router-link>
        <router-link to="/app/456">app456</router-link>
        <router-link to='/login'>login</router-link>
        <!-- <router-link to='/login/exact'>login exact</router-link> -->
        <!-- <todo></todo> -->
        <transition name="fade">
        <router-view/>
          </transition>
        <Footer></Footer>
        <!-- <router-view name="a"/> -->
    </div>
</template>
<script>
import {
  mapState,
  mapGetters
} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
// import Todo from './views/todo/todo.vue'

export default{
  components: {
    Header,
    Footer
    // Todo

  },
  mounted () {
    // console.log(this.$route)
    console.log(this.$store)
    let i = 0
    setInterval(() => {
      // this.$store.state.count++
      this.$store.commit('updateCount', i++)
    }, 500)
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['fullName'])
    // count () {
    //   return this.$store.state.count
    // },
    // fullName () {
    //   return this.$store.getters.fullName
    // }
  },
  data () {
    return {
      test: 'abcdef'
    }
  }

}
</script>

<style lang="stylus" scoped>
#app{
    
}   
    #cover
        position absolute
        left 0
        top 0
        right 0
        bottom 0
        background-color #999999
        opacity .9
        z-index -1
</style>
