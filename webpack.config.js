'use strict';

const webpack = require('webpack');

let config = {
  entry: {
    myPages: [
      './app/main.js'
    ]
  },
  module: {
     loaders: [
       // Javascript: js, jsx
       {
         test: /\.jsx?$/,
         loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          compact: true
        }
       }
    ]
  },
  output: {
    path: './dist',
    filename: 'bundle.js'
  }
};

module.exports = config;