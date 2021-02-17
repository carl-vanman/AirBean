<template>
  <div class="profile">
    <Nav />

    <div class="orderhistory" v-if="getUserProfile.name">
      <UserProfile :user="getUserProfile"/>
    </div>

    <div class="create-account" v-else>
      <CreateProfile />
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import CreateProfile from "@/components/CreateProfile.vue";
import UserProfile from "@/components/UserProfile.vue";

export default {
  components: {
    Nav,
    CreateProfile,
    UserProfile,
  },

  computed: {
    getUserProfile() {
      return this.$store.getters.getUser;
    },
  },
};
</script>

<style scoped>
.profile {
  position: fixed;
  top: 0;
  left: 0;
  background-image: url("../assets/header2.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-color: var(--airBean-brown);
  height: 100vh;
  width: 100vw;
}

.create-account {
  width: 91%;
  height: 85%;
  margin: 2.5% auto auto auto;
}
</style>
