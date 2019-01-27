const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const OUTPUT_PATH = 'dist';

module.exports = {
  mode: 'production',
  entry: './src/components/PostcodeContainer.jsx',

  output: {
    filename: 'postcode.js',
    path: path.resolve(__dirname, OUTPUT_PATH),
    library: 'simpleReactComponent',
    libraryTarget: 'umd',
  },

  devtool: 'source-map',

  plugins: [
    new CleanWebpackPlugin([OUTPUT_PATH]),
    new MiniCssExtractPlugin({ filename: 'postcode.css' }),
  ],

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[local]_[hash:base64:10]',
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.jpg$/,
        use: 'file-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  // TODO Need to add react as externals etc
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
    },
  },

};
