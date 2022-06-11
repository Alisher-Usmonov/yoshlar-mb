module.exports = {
    mode: "production",
    entry: "./src/public/js/index.js",
    output : {
        filename: "bundle.js",
        path: __dirname + "/src/public/js"
    },
    watch: true,
    devtool: "source-map",
    module: {}
}