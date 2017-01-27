import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';


const BrowserSyncPluginConfig = new BrowserSyncPlugin({
  host: 'localhost',
  port: 3000,
  notify: false,
  proxy: 'http://localhost:8080/'
  }, {
  reload: false,
});

const PROD = process.env.NODE_ENV === 'production';
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/src/index.html`,
  filename: 'index.html',
  inject: 'body',
});

const DefinePlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
  },
});

const plugins = [
  HTMLWebpackPluginConfig,
  BrowserSyncPluginConfig,
  DefinePlugin,
  new ExtractTextPlugin({ filename: 'bundle.css', disable: false, allChunks: true })
];

const loaders = [
  { test: /.jsx?$/, loader: 'babel-loader', include: [path.resolve('src')] },
  {
    test: /\.s?css$/,
    loaders: ExtractTextPlugin.extract({
      fallbackLoader: 'style-loader',
      loader: 'css-loader!sass-loader',
    })
  },
  { test: /\.json$/, loader: 'json-loader' },
  { test: /\.html$/, loader: 'html-loader', query: { minimize: true } },
  { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
  { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
];

const config = {
  entry: './src/index.jsx',
  output: { path: `${__dirname}/dist`, filename: PROD ? '[hash].js' : 'bundle.js' },
  devtool: 'source-map',
  devServer: {
    clientLogLevel: 'info',
    historyApiFallback: true,
    inline: true,
  },
  resolve: {
    extensions: [
      '.jsx', '.js',
    ],
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules'),
    ],
    alias: {
    },
  },
  module: {
    rules: loaders,
  },
  plugins: PROD ? [
    ...plugins,
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      comments: false,
      sourceMap: true,
      minimize: false,
    }),
  ] : plugins,
};


export default config;
