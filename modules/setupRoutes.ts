import { defineNuxtModule } from "@nuxt/kit";
import path from "node:path";
import { glob } from "glob";

export default defineNuxtModule({
  hooks: {
    async "pages:extend"(pages) {
      const routesFilesPaths = await glob("./src/views/**/*.routes.ts");
      const routes = await Promise.all(
        routesFilesPaths.map(routesFilePath => {
          return import(path.join(path.resolve(), routesFilePath));
        })
      );
      pages.push(...routes.flat(1));
    },
  },
});
