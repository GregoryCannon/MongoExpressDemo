var path = require('path');

var config = {
  entry: {
    app: './client/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    modules: [
      'client',
      'node_modules',
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /bootstrap.*\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.css$/,
        exclude: [ /node_modules/,  /bootstrap.*\.css$/ ],
        loader: 'style-loader!css-loader?localIdentName=[name]__[local]__[hash:base64:5]&modules&importLoaders=1!postcss-loader',
      }, {
        test: /\.css$/,
        include: /node_modules/,
        loaders: ['style-loader', 'css-loader'],
      }, {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader?modules&localIdentName=[name]__[local]__[hash:base64:5]',
          'postcss-loader?sourceMap',
          'stylus-loader?paths=client'
        ]
      }, {
        test: /\.jsx?$/,
        exclude: [/node_modules/, /.+\.config.js/],
        use: {
          loader: 'babel-loader',
          query: {
            presets: [["react"], ["es2015"], ["stage-2"]]
          }
        },
      }, {
        test: /\.(jpe?g|gif|png|svg)$/i,
        loader: 'url-loader?limit=10000',
      }, {
        test: /\.json$/,
        loader: 'json-loader',
      }, {
        // Load font files as direct file paths
        test: /\.(?:eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
      },
    ],
  },
};

module.exports = config;
