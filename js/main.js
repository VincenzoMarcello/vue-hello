const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello World",
      search: "./img/bd.jpg",
    };
  },
}).mount("#app");
