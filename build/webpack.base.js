const path = require('path');
const {
  VueLoaderPlugin
} = require('vue-loader');

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js','.jsx','.ts', '.tsx', '.vue', '.less']
  },
  module: {
    rules: [{
        test: /\.vue$/,
        use: [{
          loader: 'vue-loader',
          options: {
            compilerOptions: {
              preserveWhitespace: false
            }
          }
        }]
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // enable sub-packages to find babel config
          options: {
            rootMode: 'upward'
          }
        }
      },
      {
        test: /\.(le|c)ss$/,
        sideEffects: true,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              paths: [path.resolve(__dirname, 'node_modules')]
            }
          }
        ]
      },
      {
        test: /\.md$/,
        use: ['vue-loader', '@vant/markdown-loader']
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};
