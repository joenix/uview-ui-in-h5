// Use UView UI Origin
import UView from "./main";

// Use UView-UI
import "./index.scss";

export default {
  // Plugin Register
  install(Vue) {
    // First Register
    Vue.use(UView);

    // Get Context
    const context = require.context("./components/", true, /\.vue$/);

    // Loop
    context.keys().forEach(key => {
      // Set Widget
      const widget = context(key).default;

      // Set Name
      const name = widget.name || key.replace(/^\.\/|\.vue/g, "").split('/')[0];

      // Register
      Vue.component(`${name}`, widget);
    });
  }
};
