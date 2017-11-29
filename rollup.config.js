import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";

const globals = {
  // Apollo
  "apollo-link": "apolloLink.core",
  graphql: "graphql.core"
};

export default {
  input: "src/index.js",
  output: {
    file: "./lib/bundle.umd.js",
    format: "umd"
  },
  name: "apolloLinkLocal",
  exports: "named",
  globals,

  sourcemap: true,
  external: ["graphql", "apollo-link"],
  plugins: [
    resolve({
      browser: true
    }),
    babel({
      exclude: "node_modules/**" // only transpile our source code
    })
  ]
};
