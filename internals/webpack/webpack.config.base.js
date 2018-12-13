const path = require('path');
const webpack = require('webpack');
const sourcePath = path.join(process.cwd(), 'src');

process.noDeprecation = true;

module.exports =  options => ({
  mode: options.mode,
  context: sourcePath,

  entry: options.entry,

  output: Object.assign(
    {
      path: path.join(process.cwd(),"dist"),
      publicPath: "/",
    },
    options.output,
  ),
  optimization: options.optimization,
  module: {
    rules: [
      {
        // 拡張子 .ts の場合
        test: /\.tsx$|.ts$/,
        // TypeScript をコンパイルする
        use: 'ts-loader'
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { test: /\.(jpg|png|gif)$/, use: [{ loader: 'url-loader', options: { limit: 10 * 1024 } }]},
      { loader: 'image-webpack-loader', options: {
          mozjpeg: {enabled: false },
          gifsicle: { interlaced: false },
          optipng: { optimizationLevel: 7 },
          pngquant: {
            quality: '65-90',
            speed: 4
          }}},
      {
        test: /\.ts$|.tsx$/,
        enforce: "pre",
        use: [{
          loader: 'tslint-loader',
          options: {
            typeCheck: true,
            fix: true,
            tsConfigFile: path.join(process.cwd(),'tsconfig.json')
          }}]},
      // static assets
      { test: /\.html$/, use: 'html-loader' },

    ]
  },
  plugins: options.plugins.concat([
    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; Terser will automatically
    // drop any unreachable code.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ]),
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.ts', '.tsx', '.js', '.json'],
    mainFields: ['browser', 'jsnext:main', 'main'],
  },
  devtool: options.devtool,
  target: 'web', // Make web variables accessible to webpack, e.g. window
  performance: options.performance || {},

});
