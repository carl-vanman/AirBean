<template>
  <div class="container">
    <div :class="{ cartBackground: cartBoard.active }"></div>
    <button @click="cartBoard.active = !cartBoard.active">
      <img src="../assets/bag.svg" alt="" />
      <div class="itemCount">
        <p class="itemCount__num">7</p>
      </div>
    </button>
    <article v-if="cartBoard.active" class="cartBoard">
      <header>
        <h2>Din Beställning</h2>
      </header>
      <section>
        <ul>
          <li>
            <h4>BryggKaffe</h4>
            <p>98kr</p>
          </li>
          <li>
            <h4>Cappuccino</h4>
            <p>168kr</p>
          </li>
        </ul>
      </section>
      <footer>
        <div class="totSum">
          <h2>Total</h2>
          <span>266kr</span>
        </div>
        <p>inkl. moms + drönarleverans</p>
      </footer>
      <button class="large">Take my money!</button>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartBoard: {
        active: false,
      },
    };
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

button {
  align-self: flex-end;
  background-color: var(--airBean-brown);
  color: white;
  font-size: 24px;
  font-weight: bold;
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 100vw;
  cursor: pointer;

  position: relative;
  z-index: 2;
}

button:focus {
  outline: 0;
}

.itemCount {
  background-color: var(--airBean-orange);
  width: 22px;
  height: 22px;
  border-radius: 100%;

  position: absolute;
  top: 0;
  right: 0;
}

.itemCount__num {
  color: white;
  font-weight: bold;
  margin: 4px 0 0;
}

/* Item */

ul {
  list-style: none;
}
ul,
li {
  margin: 0;
  padding: 0;
}
/* CartBoard */

.cartBoard {
  align-self: flex-end;
  width: max(341px, 85%);
  padding: 1rem;
  border-radius: 3px;
  background-color: white;

  position: fixed;
  top: 9%;
  z-index: 3;

  display: flex;
  flex-direction: column;
}

.cartBoard::before {
  content: "";
  width: 20px;
  height: 10px;
  background-color: white;

  position: absolute;
  top: -10px;
  right: 20px;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  z-index: 3;
}

.cartBackground {
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
}

article header {
  align-self: center;
}

.totSum {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

h4 {
  font-size: 20px;
  margin: 1rem 0 0;
}

.totSum h2 {
  margin: 5rem 0 0;
}

.totSum span {
  font-weight: bold;
}

p {
  font-size: 12px;
  margin: 0;
}

.large {
  width: 248px;
  height: 55px;
  margin: 3rem 0 2rem;
  align-self: center;
}
</style>