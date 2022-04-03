<template>
   <div class="col">
     <router-link :to="{ name: 'ProductDetails', params: { id: product._id }}">
      <div class="card hover">
        <img :src="product.img" class="card-img-top hover" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text fw-bold h3">$ {{ product.price }}</p>
          <p class="card-text">{{ product.shortdesc.slice(0, 65) }} ...</p>
          <p class="fw-bold">Read more</p>
        </div>
      </div>
    </router-link>
   </div>
</template>

<script>
export default {
  props: ['product']
}
</script>

<style>
  .hover:hover {
    background: rgba(0, 0, 0, 0.068);
    color: black;
  }
  a {
    text-decoration: none;
    color: black;
  }
</style>