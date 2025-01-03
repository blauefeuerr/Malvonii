<template>
  <div class="cart">
    <h2>Корзина</h2>
    <div v-if="cart.length === 0"><span>Корзина пуста</span></div>
    <ul v-else>
      <li v-for="(item, index) in cart" :key="item.id">
        {{ item.title }} - {{ item.price }} $
        <button id="btn-delete" @click="removeFromCart(index)">Удалить</button>
      </li>
    </ul>
    <div class="cart-summary">
      <span>Товаров в корзине: {{ cart.length }}</span>
      <br />
      <span>Общая сумма: {{ totalPrice }} $</span>
    </div>
    <button id="btn-checkout" v-if="cart.length" @click="proceedToCheckout">
      Перейти к оплате
    </button>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: ["cart", "removeFromCart"],
  computed: {
    totalPrice() {
      return this.cart
        .reduce((total, item) => total + item.price, 0)
        .toFixed(2);
    },
  },
  methods: {
    proceedToCheckout() {
      alert("Оплата пока не реализована.");
    },
  },
};
</script>
<style scoped>
#btn-delete {
  background: black;
  color: lightgray;
  padding: 0.1rem;
}

#btn-checkout {
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  background-color: black;
  color: whitesmoke;
}

.cart {
  padding: 1.5rem;
  width: 90%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: black;
}

li {
  color: white;
  font-size: larger;
  font-weight: 500;
}
span {
  color: white;
  font-size: larger;
  font-weight: 500;
}
</style>
