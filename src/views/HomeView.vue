<template>
  <div class="home">
    <div class="product-grid">
      <div
        class="card"
        v-for="(product, index) in this.$store.state.products"
        :key="index"
      >
        <div class="card-image">
          <img :src="product.image" alt="iPhone" />
        </div>
        <div class="card-content">
          <h3 style="white-spacing: nowrap">
            {{ product.name }}
          </h3>
          <p>{{ product.description }} - {{ product.id }}</p>
          <div class="card-bottom">
            <router-link to="/about">About</router-link>
            <div class="like-icon">
              <!-- svg solid -->
              <svg
                @click="addToLiked(product)"
                v-if="product.is_liked == false"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ff0000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-heart"
              >
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                ></path>
              </svg>
              <svg
                @click="removeFromLiked(product)"
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                fill="#ff0000"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  data() {
    return {};
  },

  methods: {
    addToLiked(product) {
      product.is_liked = !product.is_liked;
      this.$store.state.liked.push(product);
      console.log(this.$store.state.liked);
    },
    removeFromLiked(product) {
      product.is_liked = !product.is_liked;
      this.$store.state.liked.splice(
        this.$store.state.liked.indexOf(product),
        1
      );
      console.log(this.$store.state.liked);
    },
  },
};
</script>

<style>
</style>