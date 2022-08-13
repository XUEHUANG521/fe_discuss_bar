const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	devtool: 'inline-source-map',

	output: {
	path: path.join(__dirname, '/dist'),
	filename: 'bundle.js'
	},
	devtool: 'inline-source-map',
	devServer: {
		static: './dist',
	},
	module: {
	rules: [
	{
		test: /\.jsx?$/,
		exclude: /node_modules/,
		loader: 'babel-loader'
	},
	{
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	},
	{
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
    },
	{
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
    },
	{
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
	]
	},
	resolve: {
	extensions: ['.jsx', '.ts', '.js', '.tsx'],
	},
	
	plugins:[
	new HtmlWebpackPlugin({ template: path.resolve(__dirname, "public", "index.html"),
		favicon: "./public/favicon.ico",
		filename: "index.html",
		manifest: "./public/manifest.json",
  })
	]
}