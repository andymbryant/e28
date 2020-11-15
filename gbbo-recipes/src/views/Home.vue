<template>
  <Masthead/>
  <ProductFilter/>
  <ProductList v-if='!loading'/>
</template>

<script>
import Masthead from '@/components/Masthead.vue';
import ProductFilter from '@/components/ProductFilter.vue';
import ProductList from '@/components/ProductList.vue';

export default {
  name: 'Home',
  components: {
    Masthead,
    ProductFilter,
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
