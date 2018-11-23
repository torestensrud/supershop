const { injectBabelPlugin } = require("react-app-rewired");
const { rewireMobX } = require("react-app-rewire-mobx");

module.export = function override(config, env) {
    config = injectBabelPlugin("babel-plugin-styled-components", config);
    config = rewireMobX(config, env);

    return config;
}