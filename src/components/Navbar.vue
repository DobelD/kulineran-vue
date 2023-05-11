<template>
 <div class="container">
    <b-navbar toggleable="lg" type="dark">
    <b-navbar-brand href="#" style="color:black">Kulineran</b-navbar-brand>
    <b-collapse id="nav-collapse" is-nav>
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/food">Food</router-link>
        <router-link class="nav-link ml-auto" to="/keranjang">Keranjang</router-link>
        <b-icon-bag></b-icon-bag>
        <span class="badge badge-success ml-2">0</span>
    </b-collapse>
  </b-navbar>
  </div>
</template>

<script>
export default {
name: 'Navbar'
}
</script>

<style>

</style>