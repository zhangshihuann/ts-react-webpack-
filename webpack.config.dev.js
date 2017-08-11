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
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            // { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            {
                test: /\.tsx?$/,
                loader: "babel-loader!ts-loader"
            },
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    plugins: [["import", { libraryName: "antd", style: true}]]
                }
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            // {
            //     enforce: "pre",
            //     test: /\.js$/,
            //     loader: "source-map-loader"
            // }
            {
                test: /\.less$/,
                loader: "style!css!less",
                // include: path.resolve(__dirname, 'node_modules')
                // include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.css$/,
                loader: "style!css",
                // include: path.resolve(__dirname, 'node_modules')
                // include: path.resolve(__dirname, 'src')
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
