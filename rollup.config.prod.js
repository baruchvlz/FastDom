import html from 'rollup-plugin-bundle-html';
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";

export default {
    input: "demo/index.ts",
    output: {
        file: "./docs/bundle.js",
        format: 'umd',
        sourcemap: true,
    },
    plugins: [
        typescript(),
          terser(),
          html({
            template: './demo/index.html',
            dest: "./docs",
            filename: 'index.html',
            inject: 'body',
        })
    ],
}
