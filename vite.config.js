import { sveltekit } from "@sveltejs/kit/vite";
import pkg from "./package.json" assert { type: "json" };

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],

  ssr: {
    noExternal: Object.keys(pkg.dependencies || {}),
  },
};

export default config;
