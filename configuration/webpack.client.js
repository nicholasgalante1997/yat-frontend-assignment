const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

const { EnvironmentPlugin } = webpack;

function titleCase(
    str,
    delimiter
  ) {
    if (Array.isArray(str)) {
      return str.reduce(
        (a, ns) => a + delimiter + ns.slice(0).toUpperCase() + ns.slice(1),
        ''
      );
    } else {
      return str.slice(0, 1).toUpperCase() + str.slice(1);
    }
  }

function camelCase(strArr) {
    return strArr.reduce((a, ns) => {
      if (strArr.indexOf(ns) === 0) {
        return a + ns.toLowerCase();
      } else {
        return a + titleCase(ns);
      }
    }, '');
  }

function cleanFilename(filename) {
    const fileNameDirty = filename.split('.')[0];
    if (!fileNameDirty) {
        throw new Error('Could not parse filename: ' + filename);
    }
    return camelCase(fileNameDirty.split('-'));
}

function getEntryObject() {
    const dirContents = fs.readdirSync(path.resolve(process.cwd(), 'src', 'web', 'hydrate-mounts'), { encoding: 'utf-8' });
    if (dirContents.length < 1) {
        throw new Error('Could not read "hydrate-mounts" directory.')
    }

    let entryObject = {};
    for (const file of dirContents) {
        entryObject[cleanFilename(file)] = path.resolve(process.cwd(), 'src', 'web', 'hydrate-mounts', file);
    }

    return entryObject;
}

module.exports = {
    mode: 'production',
    entry: getEntryObject(),
    output: {
        clean: true,
        path: path.resolve(process.cwd(), 'build', 'static'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js/,
                type: 'javascript/auto',
                resolve: {
                    fullySpecified: false
                }

            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.png/,
                type: 'asset/resource'
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json']
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
      new EnvironmentPlugin({ ...process.env }),
    ],
};