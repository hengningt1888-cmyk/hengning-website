import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isDev = process.env.NODE_ENV !== 'production';

export default {
  mode: isDev ? 'development' : 'production',
  entry: {
    main: './client/src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist/client'),
    filename: '[name].js',
    chunkFilename: 'chunks/[name].[contenthash:8].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'client/src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'typescript',
                tsx: true,
              },
              transform: {
                react: {
                  runtime: 'automatic',
                },
              },
            },
          },
        },
      },
      {
        test: /\.ts$/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'typescript',
              },
            },
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'builtin:lightningcss-loader',
            options: {
              targets: 'defaults',
            },
          },
        ],
        type: 'css',
      },
    ],
  },
  optimization: isDev
    ? {}
    : {
        splitChunks: {
          chunks: 'async',
          minSize: 20000,
        },
      },
  devtool: isDev ? 'eval-source-map' : false,
};
