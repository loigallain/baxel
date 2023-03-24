const path = require("path");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');


module.exports = {
    entry: './src/index.ts',
    
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'build/dist')
    },
    resolve: {
        extensions: [".ts"],
        plugins: [new TsconfigPathsPlugin()]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    mode: "development"
};