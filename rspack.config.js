const path = require('path');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
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
        test: /\.(tsx|ts|jsx|js)$/,
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
        test: /\.css$/,
        use: ['postcss-loader'],
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
