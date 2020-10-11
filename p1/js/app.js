const app = Vue.createApp({
  data() {
    return {

    }
  },
  methods: {

  },
  mounted() {
    console.log('App mounted')
  }
})

app.component('test-component', numberInputOptions)

app.mount('#app')