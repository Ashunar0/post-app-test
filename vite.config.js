import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";

export default defineConfig({
  // eslint-disable-next-line no-undef
  base: process.env.GITHUB_REPOSITORY_NAME
    ? // eslint-disable-next-line no-undef
      `/${process.env.GITHUB_REPOSITORY_NAME}/`
    : "/",
  plugins: [
    remix({
      // eslint-disable-next-line no-undef
      basename: process.env.GITHUB_REPOSITORY_NAME
        ? // eslint-disable-next-line no-undef
          `/${process.env.GITHUB_REPOSITORY_NAME}`
        : "/",
      ssr: false,
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
  ],
});
