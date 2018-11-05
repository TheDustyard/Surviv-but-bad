const path = require("path");

module.exports = {
    entry: "./src/app.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    devServer: {
        contentBase: __dirname,
        compress: true,
        hot: true,
        noInfo: true,
    },
    devtool: "inline-source-map"
}