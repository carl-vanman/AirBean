<template>
  <div>
    <div v-if="!showNav" class="navicon">
      <img
        src="../assets/navicon.svg"
        alt="nav icon"
        v-on:click="navToggle(true)"
      />
    </div>

    <div v-else class="nav">
      <img
        src="../assets/close.svg"
        alt="close"
        v-on:click="navToggle(false)"
      />

      <div class="nav-links" v-on:click="navToggle(false)">
        <router-link to="Menu">Meny</router-link>
        <hr />
        <router-link to="About">Vårt kaffe</router-link>
        <hr />
        <router-link to="Profile">Min profil</router-link>
        <hr />
        <router-link to="Status">Orderstatus</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNav: false,
    };
  },

  methods: {
    navToggle: function (val) {
      this.showNav = val;
    },
  },
};
</script>


<style scoped>
.nav {
  position: fixed;
  background-color: #2f2926;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

img {
  margin: 5% auto 0 5%;
}

.nav-links {
  margin-top: 30%;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  font-size: 2rem;
  line-height: 120%;
  margin-bottom: 16px;
  letter-spacing: 0.04em;
}

hr {
  width: 13%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  margin-bottom: 16px;
}
</style>