module.exports = function (api) {
    api.cache(true)

    const presets = [
        [
            '@babel/preset-env',
            {
                targets: {
                    edge: '17',
                    firefox: '60',
                    chrome: 67,
                    safari: '11.1',
                    ie: '9',
                },
                // useBuiltIns: 'usage',
                // corejs: 3,
            },
        ],
    ]

    const plugins = [
        [
            '@babel/plugin-transform-runtime',
            {
                corejs: 3,
            },
        ],
    ]

    return {
        presets,
        plugins,
        exclude: /node_modules/,
    }
}

// {
//     loader: 'babel-loader',
//     options: {
//         // presets: [
//         //     [
//         //         '@babel/preset-env',
//         //         {
//         //             targets: {
//         //                 edge: '17',
//         //                 firefox: '60',
//         //                 chrome: 67,
//         //                 safari: '11.1',
//         //                 ie: '9',
//         //             },
//         //             // useBuiltIns: 'usage',
//         //             // corejs: 3,
//         //         },
//         //     ],
//         // ],
//         // plugins: [
//         //     [
//         //         '@babel/plugin-transform-runtime',
//         //         {
//         //             corejs: 3,
//         //         },
//         //     ],
//         // ],
//         cacheDirectory: true,
//     },
// },
