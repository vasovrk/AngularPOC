module.exports = {
    resolve: {
        extensions: ['', '.ts', '.webpack.js', '.less', '.js', '.html']
    },
    entry: ['./src/_index.ts'],
    output: {
        path: './src',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        preLoaders: [

            // Source map loader support for *.js files
            // Extracts SourceMaps for source files that as added as sourceMappingURL comment.
            //
            // See: https://github.com/webpack/source-map-loader
            {
                test: /\.js$/,
                loader: "source-map-loader", exclude: []
            }
        ],
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                query: {
                    compilerOptions: {
                        "target": "es5",
                        "emitDecoratorMetadata": true,
                        "experimentalDecorators": true,
                        "sourceMap": true,
                        "removeComments": false,
                        "module": "commonjs"
                    }

                }
            }

        ]
    },

};