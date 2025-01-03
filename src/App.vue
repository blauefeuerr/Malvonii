<template>
  <div id="app">
    <nav>
      <p id="name">Malvonii</p>
      <router-link to="/" class="link" id="link1">Товары</router-link>
      <router-link to="/cart" class="link" id="link2">Корзина</router-link>
      <router-link to="/auth" class="link" id="link2">Войти</router-link>
    </nav>
    <br /><br /><br /><br /><br />
    <router-view
      @addToCart="addToCart"
      :cart="cart"
      :removeFromCart="removeFromCart"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
    };
  },
  methods: {
    addToCart(product) {
      const existingItem = this.cart.find((item) => item.id === product.id);
      if (existingItem) {
        alert("Товар уже в корзине");
        return;
      }
      this.cart.push(product);
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
  },
};
</script>

<style>
#app nav {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
nav {
  position: fixed;
  justify-content: space-around;
  align-items: center;
  display: flex;
  width: 100%;
  padding: 1%;
  background-color: rgb(50, 50, 50);
}
body {
  background: black;
}
#link3 {
  width: 10%;
  background-color: red;
}

.link {
  text-decoration: none;
  color: whitesmoke;
}
#name {
  color: lightcyan;
  letter-spacing: 0.5rem;
  font-weight: 700;
  font-style: italic;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 120%;
}
</style>
