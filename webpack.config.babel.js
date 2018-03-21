import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const APP_PATH = __dirname;
const DIST_PATH = path.join(APP_PATH, 'build');
const FRONTEND_PATH = path.join(APP_PATH, 'src');

const baseConfig = {
    cache: true,
    entry: [
        path.join(FRONTEND_PATH, 'index.jsx'),
        path.join(FRONTEND_PATH, 'style', 'index.scss')
    ],
    output: {
        path: DIST_PATH,
        filename: 'index.js'
    },
    resolve: {
        modules: [
            FRONTEND_PATH,
            'node_modules'
        ],
        extensions: ['.jsx', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css-loader')
            }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            }, {
                test: /\.(png|jpg|svg|gif)$/,
                include: [path.resolve(FRONTEND_PATH, 'images'), /node_modules/],
                loader: 'url-loader?limit=8192&name=/images/[name].[ext]'
            }, {
                test: /\.(png|svg|ico|json)$/,
                include: [path.resolve(FRONTEND_PATH, 'styles/favicons')],
                loader: 'file-loader?name=/images/[name].[ext]'
            }, {
                test: /\.(eot|ttf|woff|woff2|svg|svgz)$/,
                exclude: [path.resolve(FRONTEND_PATH, 'images')],
                loader: 'file-loader?name=/fonts/[name].[ext]'
            }
        ]
    },
    devServer: {
        proxy: {
            '/rest': {
              target: 'http://localhost:3000',
              secure: false
            }
        }
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin({
            filename: 'styles.css',
            allChunks: true
        })
    ]
};

export default baseConfig;
