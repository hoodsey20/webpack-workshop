const path = require('path');


module.exports = {
    entry: {
		app: './src/index.js',
	},
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    mode: 'development',
    watch: true,
    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 
                    {
                        loader: 'css-loader', 
                        options: {
                            modules: true
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1000,
                        name: '[name].[ext]',
                        outputPath: 'img/'
                    }
                }
            },
        ]
    }
}
