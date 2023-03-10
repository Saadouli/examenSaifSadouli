'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var babel = require('@rollup/plugin-babel');
var resolve = require('@rollup/plugin-node-resolve');
var commonjs = require('@rollup/plugin-commonjs');
var postcss = require('rollup-plugin-postcss');
var filesize = require('rollup-plugin-filesize');
var autoprefixer = require('autoprefixer');
var typescript = require('@rollup/plugin-typescript');
var pkg = require('./package.json');

const INPUT_FILE_PATH = "components/index.ts";
const OUTPUT_NAME = "Example";

const GLOBALS = {
  react: "React",
  "react-dom": "ReactDOM",
  "prop-types": "PropTypes",
};

const PLUGINS = [
  postcss({
    extract: true,
    plugins: [autoprefixer],
  }),
  babel({
    babelHelpers: "runtime",
    exclude: "node_modules/**",
  }),
  resolve({
    browser: true,
    resolveOnly: [/^(?!react$)/, /^(?!react-dom$)/, /^(?!prop-types)/],
  }),
  commonjs(),
  typescript({ tsconfig: "./tsconfig.json" }),
  filesize(),
];

const EXTERNAL = [
  "react",
  "react-dom",
  "prop-types",
  ...Object.keys(pkg.dependencies),
  ...Object.keys(pkg.devDependencies),
];

// https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers
const CJS_AND_ES_EXTERNALS = EXTERNAL.concat(/@babel\/runtime/);

const OUTPUT_DATA = [
  {
    file: pkg.browser,
    format: "umd",
  },
  {
    file: pkg.main,
    format: "cjs",
  },
  {
    file: pkg.module,
    format: "es",
  },
];

const config = OUTPUT_DATA.map(({ file, format }) => ({
  input: INPUT_FILE_PATH,
  output: {
    file,
    format,
    name: OUTPUT_NAME,
    globals: GLOBALS,
  },
  external: ["cjs", "es"].includes(format) ? CJS_AND_ES_EXTERNALS : EXTERNAL,
  plugins: PLUGINS,
}));

exports.default = config;
