<template>
  <div class="create">
    <img src="../assets/logo.svg" alt="logo" />
    <h2 class="welcome">Välkommen till AirBean-familjen!</h2>
    <p>
      Genom att skapa ett konto nedan kan <br />
      du spara och se din orderhistorik.
    </p>

    <form v-on:submit.prevent="onSubmit(name, email)" autocomplete="off">
      <label for="name">Namn</label>
      <input type="text" name="name" required v-model="name" />
      <label for="email">Epost</label>
      <input type="text" name="email" required v-model="email" />
      <div class="radio">
        <input type="radio" name="gdpr" value="GDPR Ok!" required />
        <label for="gdpr">GDPR Ok!</label>
      </div>
      <input type="submit" value="Brew me a cup" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    onSubmit: (name, email) => {},
  },
};
</script>

<style scoped>
.create {
  background-color: var(--airBean-pink);
  width: 100%;
  height: 100%;
  text-align: center;
}

img {
  margin-top: 6%;
}

h2 {
  margin: 0;
  font-size: 32px;
}

p {
  margin: 2%;
  font-size: 16px;
}

form {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 6% auto auto auto;
  text-align: start;
  font-family: "Work Sans", sans-serif;
}

label {
  font-size: 12px;
  margin-top: 4%;
  margin-bottom: 2%;
}

input[type="text"] {
  font-family: "Work Sans", sans-serif;
  height: 48px;
  border-radius: 6px;
  border: 1px solid #2f2926;
  background-color: var(--airBean-pink);
  font-size: 16px;
  padding-left: 5%;
}

input[type="text"]:focus {
  outline-color: #2f2926;
}
.radio {
  margin: 7% 0 7% 0;
  display: flex;
  align-items: center;
}

.radio label {
  margin: 0 auto 0 3%;
}
input[type="radio"] {
  width: 16px;
  height: 16px;
  margin: 0;
}

input[type="submit"] {
  font-family: "PT Serif", serif;
  background-color: var(--airBean-brown);
  color: white;
  font-size: 24px;
  font-weight: bold;
  border: none;
  width: 248px;
  height: 55px;
  border-radius: 100vw;
  cursor: pointer;
  align-self: center;
  margin-top: 10%;
}

input[type="submit"]:focus {
  outline: 0;
}
</style>