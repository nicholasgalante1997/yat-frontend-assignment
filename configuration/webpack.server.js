// Please do not run this file. MSW isnt going to work right running the server in production mode, I think.
// I only included this file to show what a full build config should look like (server config)

const path = require('path');
const webpack = require('webpack');

const { EnvironmentPlugin } = webpack;

module.exports = {
    entry: path.resolve(process.cwd(), 'src', 'index.ts'),
    mode: 'production',
    stats: {
        chunks: true,
    },
    optimization: {
        mangleExports: 'size'
      },
    module: {
        rules: [
          {
            test: /\.(ts|tsx|js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
      },
    output: {
        path: path.resolve(process.cwd(), 'build'),
        filename: 'index.js'
    },
    target: 'node',
    node: {
        global: false,
    },
    plugins: [new EnvironmentPlugin({ ...process.env })],
};