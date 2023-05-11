<template>
  <!-- Desktop -->
  <div class="container">
    <div class="hero">
      <div class="d-none d-md-block">
        <div class="row mt-4">
          <div class="col-md-6">
            <div class="d-flex h-100">
              <div class="justify-content align-self-center">
                <h2>
                  <strong>Delicious Food Menu,</strong>
                  <br />in Your Gadged
                </h2>
                <p>Ayo segera pilih dan pesan makanan favorit anda</p>
                <button class="btn btn-lg btn-success">Pesan</button>
              </div>
            </div>
          </div>
          <div class="col">
            <img src="../assets/images/hero.png" width="100%" />
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile View -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-4">
        <div class="col">
          <img src="../assets/images/hero.png" width="100%" />
        </div>
        <div class="col-md-6 mt-3">
          <div class="d-flex h-100">
            <div class="justify-content align-self-center">
              <h2>
                <strong>Delicious Food Menu,</strong>
                <br />in Your Gadged
              </h2>
              <p>Ayo segera pilih dan pesan makanan favorit anda</p>
              <router-link to="/food" class="btn btn-success float-right">
                <b-icon-eye></b-icon-eye>Pesan
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero"
};
</script>

<style>
</style>