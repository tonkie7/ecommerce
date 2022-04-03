<template>  
  <div class="row">
      <div class="col-lg-5">
        <img v-if="product" :src="product.img" alt="" class="">
      </div>
    <div class=".col-sm-6 .col-lg-3">
      <div v-if="product" class="mt-1 h2">{{ product.name }}</div>
      <div v-if="product" class="mt-2 h2">$ {{ product.price }}</div>
      <div v-if="product" class="mt-2">{{ product.desc }}</div>
      <button class="btn btn-dark mt-2">Buy now</button>
    </div>
</div>
</template>


<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: ['id'],
  methods: {
    ...mapActions(['getProduct'])
  },
  computed: {
    ...mapGetters(['product'])
  },
  created() {
    this.getProduct(this.id)
  }
}
</script>

<style scoped>

</style>