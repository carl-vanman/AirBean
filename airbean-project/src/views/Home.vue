<template>
  <div class="home">
    <header>
      <Nav />
      <CartButton class="cartButton"/>
    </header>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import CartButton from "../components/CartButton.vue";

export default {
  components: {
    Nav,
    CartButton,
  },
};
</script>

<style scoped>
  header {
  display: flex;
  padding: 15px;
  justify-content: space-between;
}

.cartbutton {
  flex-grow: 1;
}

</style>