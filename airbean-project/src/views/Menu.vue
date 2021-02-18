<template>
  <div class="container">
    <Nav />
    <CartButton />
  </div>

  <!-- <div class="container">
    <Nav />
    <CartButton />
  </div>
  <div>
    <h1>Meny</h1>
  </div> -->
</template>


<script>
import Nav from "@/components/Nav.vue";
import CartButton from "@/components/CartButton.vue";

export default {
  components: {
    Nav,
    CartButton,
  },
};
</script>
<style scoped>
.container {
  display: flex;
  background-color: var(--airBean-pink);
  width: 100vw;
  height: 100vh;
}

h1 {
  position: relative;
}
</style>