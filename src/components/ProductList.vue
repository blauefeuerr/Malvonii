<template>
  <div class="products">
    <h2>Список товаров</h2>
    <div v-if="loading" class="loading">Загрузка...</div>
    <div v-else>
      <div class="search-bar">
        <input
          v-model="searchQuery"
          @input="filterProducts"
          placeholder="Поиск товаров..."
        />
      </div>
      <div class="sort-options">
        <label for="sort" style="color: white">Сортировать...</label>
        <select id="sort" v-model="sortOption" @change="sortProducts">
          <option value="default">По умолчанию</option>
          <option value="price-asc">По цене (возрастание)</option>
          <option value="price-desc">По цене (убывание)</option>
          <option value="title-asc">По названию (А-Я)</option>
          <option value="title-desc">По названию (Я-А)</option>
        </select>
      </div>
      <div class="product-list">
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="product"
        >
          <img :src="product.image" :alt="product.title" />
          <h3 style="color: white">{{ product.title }}</h3>
          <strong style="color: white">{{ product.price }} $</strong>
          <button id="add-to-cart_btn" @click="$emit('addToCart', product)">
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProductList",
  props: ["addToCart"],
  data() {
    return {
      products: [],
      filteredProducts: [],
      originalProducts: [],
      sortOption: "default",
      searchQuery: "",
      loading: true,
    };
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        this.products = response.data;
        this.originalProducts = [...this.products];
        this.filteredProducts = [...this.products];
      } catch (error) {
        console.error("Ошибка загрузки товаров:", error);
      } finally {
        this.loading = false;
      }
    },
    sortProducts() {
      if (this.sortOption === "default") {
        this.filteredProducts = [...this.originalProducts];
      } else if (this.sortOption === "price-asc") {
        this.filteredProducts.sort((a, b) => a.price - b.price);
      } else if (this.sortOption === "price-desc") {
        this.filteredProducts.sort((a, b) => b.price - a.price);
      } else if (this.sortOption === "title-asc") {
        this.filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
      } else if (this.sortOption === "title-desc") {
        this.filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
      }
    },
    filterProducts() {
      this.filteredProducts = this.originalProducts.filter((product) =>
        product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      this.sortProducts();
    },
  },
  created() {
    this.fetchProducts();
  },
};
</script>

<style>
#add-to-cart_btn {
  background-color: #181818;
  color: white;
  border: none;
  font-size: large;

  #add-to-cart_btn:hover {
    border: 1px solid white;
  }

  #add-to-cart_btn:active {
    background-color: #424242;
  }
}

.loading {
  color: white;
  text-align: center;
  font-size: x-large;
}

h2 {
  color: azure;
  text-align: center;
  font-size: xx-large;
}

.search-bar input {
  width: 99%;
  background-color: black;
  color: white;
}

.products {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.product {
  flex: 1 1 calc(25% - 20px);
  display: flex;
  flex-direction: column;
  background: #202020;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
}

.product img {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
}
</style>
