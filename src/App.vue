<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/favourites">Liked</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
@import url(./assets/style.css);
</style>
