// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app/:id',
    // path: '/app',
    props: true,
    component: () => import('../views/todo/todo.vue'),
    name: 'app',
    meta: {
      title: 'this is app',
      keywords: 'this is keywords',
      description: 'this is description'
    },
    beforeEnter (to, from, next) {
      console.log('beforeEnter')
      next()
    }
    // children: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
  },
  {
    path: '/login',
    components: {
      default: () => import('../views/login/login.vue')
      // a: Todo
    }
  }
  // {
  //   path: '/login/exact',
  //   component: Login
  // }
]
