const path = require('path');

module.exports = {
    entry: path.join(process.cwd(),"app/index.tsx"),
    output: {
        filename: "bundle.js",
        path: path.join(process.cwd(),"dist")
    },
    devtool: "source-map",

    resolve: {
        extensions: [".ts",".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};
