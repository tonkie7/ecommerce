<template>
  <ProductCards />
</template>

<script>
import { mapActions } from 'vuex'
import ProductCards from '../components/products/ProductCards.vue'
export default {
  components: { ProductCards },
  methods: {
    ...mapActions(['getProducts'])
  },
  created() {
    this.getProducts()
  },
}
</script>

<style>

</style>