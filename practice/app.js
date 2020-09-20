var app = new Vue({
  el: "#app",
  data: {
    items: [],
    item: ''
  },
  methods: {
    addItemToList() {
      this.items.push(this.item)
    }
  },
  computed: {
    displayText() {
      return this.items.length ? `Item count: ${this.items.length}` : 'You have no items in your list.'
    }
  }
})