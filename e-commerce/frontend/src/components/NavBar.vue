<template>
   <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
   <div class="container-fluid">
      <router-link class="navbar-brand" to="/"><i class="fa-solid fa-signal me-1"></i> Techstore</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
         aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
         <ul class="navbar-nav">
         <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
         </li>
         <li class="nav-item">
            <router-link class="nav-link active" to="/products">Products</router-link>
         </li>
         <li class="nav-item">
            <router-link class="nav-link active" to="/about">About</router-link>
         </li>
         </ul>
      </div>
   </div>
   </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>