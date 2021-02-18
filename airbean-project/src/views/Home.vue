<template>
  <div class="container">
    <img src="../assets/landing_left.svg" />
    <img class="img-right" src="../assets/landing_right.svg" />
    <article class="wrapper">
      <!-- <img class="logotype" src="../assets/Group 7.svg" /> -->
      <header>
        <button @click="clicker" class="cta"></button>
        <h1>AIR BEAN</h1>
        <p>dronedelivered coffee</p>
      </header>
    </article>
  </div>
</template>

<script>
export default {
  methods: {
    clicker() {
      this.$router.push("/profile");
    },
  },
};
</script>

<style scoped>
.container {
  background-color: var(--airBean-darkGreen);
  position: fixed;
  display: flex;
  width: 100vw;
  height: 100vh;
}

img {
  position: fixed;
  display: flex;
  width: auto;
  height: 100vh;
}

.img-right {
  margin-left: 61%;
}

.wrapper {
  display: flex;
  align-items: center;
}

/* .logotype {
  width: 64px;
  height: 64px;
  margin-left: 43%;
} */

h1 {
  font-size: 42px;
  color: #fff;
}

p {
  font-size: 9px;
  color: #fff;
  text-transform: uppercase;
  line-height: 16px;
}

header {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10rem;
  margin-top: 12rem;
}

.cta {
  background-image: url("../assets/Group 7.svg");
  background-repeat: no-repeat;
  width: 64px;
  height: 64px;
  text-decoration: none;
  border-radius: 50%;
  border: none;
  cursor: pointer;
}
</style>