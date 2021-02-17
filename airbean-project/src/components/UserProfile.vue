<template>
  <div>
    <div class="profile-info">
      <img src="../assets/profile.svg" alt="profile picture" />
      <h2>
        {{ user.name }}
      </h2>
      <p>
        {{ user.email }}
      </p>
    </div>

    <div class="orders">
      <h2>Orderhistorik</h2>
      <div class="scroll">
        <div class="order" v-for="order in user.orders" :key="order.id">
          <p class="order-id">{{ order.id }}</p>
          <p class="order-date">{{ order.date }}</p>
          <p class="order-total">total ordersumma</p>
          <p class="order-sum">{{ order.sum }} kr</p>
        </div>
      </div>
    </div>
    <div class="spent" v-if="user.orders.length > 0">
      <p>Totalt spenderat</p>
      <p>{{ totalSpent }} kr</p>
    </div>
    <div class="spent" v-else>
        <p>
            Inga ordrar ännu :(
        </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
  },

  data() {
    return {
      totalSpent: 0,
    };
  },

  methods: {
    countTotal() {
      for (let i = 0; i < this.user.orders.length; i++) {
        this.totalSpent += this.user.orders[i].sum;
      }
    },
  },

  mounted() {
    this.countTotal();
  },
};
</script>

<style scoped>
.profile-info {
  margin-top: 14%;
  text-align: center;
}
img {
  margin-bottom: 5px;
}
h2 {
  color: #fff;
  margin: 0;
  font-size: 24px;
  letter-spacing: 0.04em;
}

p {
  color: rgba(255, 255, 255, 0.8);
  margin-top: 3px;
  font-size: 14px;
}

.orders {
  width: 85%;
  margin: 20% auto auto auto;
}

.orders h2 {
  font-size: 22px;
  margin-bottom: 5%;
}

.scroll {
  max-height: 155px;
  overflow: auto;
}

.order {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 3%;
}

.order:last-child {
  border-bottom: none;
  margin-bottom: 0%;
}
.order-id,
.order-date {
  margin-bottom: 1%;
  font-size: 14px;
}

.order-id {
  font-weight: bold;
}

.order-date,
.order-sum {
  text-align: end;
}

.order-sum,
.order-total {
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  margin-bottom: 5%;
}

.spent {
  border-top: 3px solid rgba(255, 255, 255, 0.2);
  width: 85%;
  margin: 0 auto auto auto;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
}

.spent p {
  margin-top: 3%;
}
</style>