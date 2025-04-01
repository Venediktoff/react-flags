import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      exports: 'named',
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
    },
  ],
  external: ['react', 'react/jsx-runtime'],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      jsx: 'react-jsx', // Ensure JSX is compiled
    }),
  ],
};
