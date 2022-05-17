// // /* config-overrides.js */
// // const webpack = require('webpack');
// // const dotenv = require('dotenv')
// // dotenv.config()
// // module.exports = function override(config, env) {
// //     //do stuff with the webpack config...

// //     config.resolve.fallback = {
// //         url: require.resolve('url'),
// //         assert: require.resolve('assert'),
// //         crypto: require.resolve('crypto-browserify'),
// //         http: require.resolve('stream-http'),
// //         https: require.resolve('https-browserify'),
// //         os: require.resolve('os-browserify/browser'),
// //         buffer: require.resolve('buffer'),
// //         stream: require.resolve('stream-browserify')
// //     };
// //     config.plugins.push(
// //         new webpack.ProvidePlugin({
// //             process: 'process/browser',
// //             Buffer: ['buffer', 'Buffer'],
// //         }),
// //     );

// //     return config;
// // }

// module.exports = {
//     // ...
//     resolve: {
//         fallback: {
//           util: require.resolve("util/"),
//           buffer: require.resolve("buffer"),
//           os: require.resolve("os-browserify/browser"),
//           "path": require.resolve("path-browserify")
//         }
//     }
//     // ...
//   };