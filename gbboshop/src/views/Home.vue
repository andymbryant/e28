<template>
  <Header/>
  <ProductList v-if='!loading'/>
</template>

<script>
import Header from '@/components/Header.vue';
import ProductList from '@/components/ProductList.vue';

export default {
  name: 'Home',
  components: {
    Header,
    ProductList,
  },
  data() {
    return {
      loading: false,
    };
  },
  created() {
    this.loading = true;
  },
  mounted() {
    this.loading = false;
  },
};
</script>
