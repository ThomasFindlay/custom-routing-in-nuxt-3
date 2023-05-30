import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "./src",
  modules: [resolve("./modules/setupRoutes")],
});
