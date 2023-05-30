import { NuxtPage } from "@nuxt/schema";

const dashboardRoutes: NuxtPage[] = [
  {
    path: "/",
    name: "Home",
    file: "@/views/dashboard/home/home.vue",
  },
  {
    path: "/profile",
    name: "Profile",
    file: "@/views/dashboard/profile/profile.vue",
  },
  {
    path: "/settings",
    name: "Settings",
    file: "@/views/dashboard/settings/settings.vue",
  },
];

export default dashboardRoutes;
