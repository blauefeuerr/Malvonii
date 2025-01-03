<template>
  <div class="auth">
    <h2>Авторизация</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username" style="color: white">Имя пользователя:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="password" style="color: white">Пароль:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button id="btn-submit" type="submit">Войти</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Auth",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      const users = [
        { username: "admin", password: "1234" },
        { username: "user1", password: "pass1" },
        { username: "user2", password: "pass2" },
      ];
      const user = users.find(
        (u) => u.username === this.username && u.password === this.password
      );
      if (user) {
        document.cookie = `user=${user.username}; path=/;`;
        this.$emit("login", { username: user.username });
      } else {
        alert("Неверные данные для входа!");
      }
    },
  },
};
</script>

<style>
#username,
#password {
  background-color: black;
}

#btn-submit {
  background-color: black;
  padding: 0.2rem;
  color: whitesmoke;
}

.auth {
  margin-top: 20px;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background: #222020;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
}
</style>

/* Сделать норм кнопки в оттенках черно белого @@@@@@@@@@@@@@@@@@ 85% сделано */
