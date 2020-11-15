<template>
  <Masthead/>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import Masthead from '@/components/Masthead.vue';

export default {
  name: 'Home',
  components: {
    Masthead,
  },
};
</script>
