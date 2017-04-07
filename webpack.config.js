var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname + "/src",
    entry: "./app.js",
    output: {
        filename: "my-blog.bundle.js",
        path: __dirname + "/dist"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"]
            },{
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader" 
            },{
                test: /\.jpg$/,
                loader: "url-loader"
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./index.html",
        favicon: "./assets/favicon.png"
    })]
};