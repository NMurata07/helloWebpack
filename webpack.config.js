const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/js/app.js',
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js'
    },
    devServer:{
        contentBase: `./dist`
    },
    module: {
        rules: [
          {
		        test: /\.(gif|png|jpg)$/,
		        use: [
		          {
		            loader: 'url-loader',
		            options: {
		              limit: 51200,
		              name: './images/[name].[ext]'
		            }
		          }
		        ]
		      },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: `${__dirname}/dist`
                        }
                    },
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "bundled_style.css"
        })
    ],
};
