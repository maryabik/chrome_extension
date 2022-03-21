const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: 'index.js',
    output: {
        path: __dirname + '/public',
        filename: 'index_bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}