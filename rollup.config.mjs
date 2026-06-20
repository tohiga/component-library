import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import packageJson from "./package.json" with { type: "json" };

export default [
    {
  input: "src/index.ts",
  output: [
    { file: packageJson.main, format: "cjs", sourcemap: true },
    { file: packageJson.module, format: "esm", sourcemap: true },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      exclude: ["**/*.test.ts", "**/*.test.tsx", "**/*.stories.tsx"],
      declaration: false,
      declarationMap: false,
    }),
    postcss({
      extensions: [".css", ".scss"],
      modules: true,
      autoModules: true,
      use: [["sass", {}]],
      inject: true,
      extract: false,
    }),
  ],
},
{
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "esm"}],
    plugins: [
        dts(),
    ],
    external: [/\.css$/, /\.scss$/],
}
]