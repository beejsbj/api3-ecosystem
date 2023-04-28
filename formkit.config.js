// formkit.config.js
import { defaultConfig } from "@formkit/vue";
import { createMultiStepPlugin } from "@formkit/addons";
import "@formkit/addons/css/multistep";

const config = defaultConfig({
  plugins: [createMultiStepPlugin()],
  classes: {
    label: "notice-voice",
  },
});

export default config;
