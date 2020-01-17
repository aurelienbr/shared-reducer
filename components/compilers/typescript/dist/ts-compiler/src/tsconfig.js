"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
exports.FIXED_OUT_DIR = 'dist';
function getTSConfig(isDev, overrideConfig) {
    var defaultOptions = {
        compilerOptions: {
            outDir: exports.FIXED_OUT_DIR,
            target: isDev ? 'ES2017' : 'ES2015',
            sourceMap: isDev,
            moduleResolution: 'Node',
            esModuleInterop: true,
            module: 'ES6',
            allowSyntheticDefaultImports: true,
            resolveJsonModule: true,
            declaration: true,
            experimentalDecorators: true,
            inlineSourceMap: isDev,
            inlineSources: isDev,
            jsx: 'react',
            rootDir: './',
            removeComments: !isDev,
            typeRoots: [
                './node_modules/@types'
            ],
            importHelpers: false
        },
        include: ['./**/*'],
        exclude: ['node_modules', '.dependencies', exports.FIXED_OUT_DIR]
    };
    var config = lodash_1.merge({}, defaultOptions, overrideConfig);
    if (config.compilerOptions.outDir !== exports.FIXED_OUT_DIR) {
        console.warn('Forced outDir to be: "dist".');
        config.compilerOptions.outDir = exports.FIXED_OUT_DIR;
    }
    return config;
}
exports.getTSConfig = getTSConfig;