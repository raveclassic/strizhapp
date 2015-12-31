var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.jsx',
		vendor: [
			'react',
			'react-router',
			'redux',
			'redux-router',
			'react-redux',
			'history',
			'react-tap-event-plugin',
			'material-ui',
			'babel-polyfill'
		]
	},
	output: {
		path: './www',
		filename: '[name].js'
	},
	resolve: {
		extensions: ['', '.ts', '.js', '.jsx', '.tsx', '.scss', '.jpg']
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: 'babel!awesome-typescript-loader'
			},
			{
				test: /\.scss$/,
				loader: 'style!css!sass'
			},
			{
				test: /\.ttf$|\.woff2?$|\.png$|\.jpg$|\.svg$|\.eot$$/,
				loader: 'file-loader',
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: true
		}),
		new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
	]
};