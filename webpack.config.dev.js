// let webpack = require('webpack');
const path = require('path');

module.exports = {
    // entry: "./src/main.tsx",
    entry: {
        app: [
            "webpack-dev-server/client?http://localhost:8090/",
            "./src/main.tsx"
        ]
    },
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
        publicPath: "/dist/"
        // publicPath: "http:localhost:8090/"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".ts", ".tsx", ".js", ".json"]
    },

    module: {
        // rules: [
        loaders: [
            {
                test: /\.less$/,
                // loader: "style!css!less",
                loader: "style-loader!css-loader!less-loader",
                // include: __dirname
                // include: path.resolve(__dirname, 'node_modules')
                // include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.ts(x?)$/,
                //test: /\.(js|jsx|tsx|ts)?$/,
                //loader: "babel-loader!ts-loader"
                loader: "babel-loader!ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    devServer: {
        // hot: true,
        // inline: true,
        port: 8090,
        // host: "localhost",
        // progress: true
        hotOnly: true
    }/*,
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]*/
};
