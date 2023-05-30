<template>
  <div>
    <div :class="$style.container">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/profile">Profile</nuxt-link>
      <nuxt-link to="/settings">Settings</nuxt-link>
      <nuxt-link to="/login">Login</nuxt-link>
      <nuxt-link to="/register">Register</nuxt-link>
    </div>
    <NuxtPage />
  </div>
</template>
<style module>
.container {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}
</style>
