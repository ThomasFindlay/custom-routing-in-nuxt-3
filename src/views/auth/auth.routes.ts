import { NuxtPage } from "@nuxt/schema";

const authRoutes: NuxtPage[] = [
  {
    path: "/login",
    name: "Login",
    file: "@/views/auth/login/login.vue",
  },
  {
    path: "/register",
    name: "Register",
    file: "@/views/auth/register/register.vue",
  },
];

export default authRoutes;
