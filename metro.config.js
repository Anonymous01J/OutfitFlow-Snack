const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.sourceExts = process.env.EXPO_ROUTER_APP_ROOT
  ? ['expo.ts', 'expo.tsx', 'expo.js', 'expo.jsx', 'ts', 'tsx', 'js', 'jsx']
  : ['ts', 'tsx', 'js', 'jsx'];

config.resolver.nodeModulesPaths = [
  __dirname + '/node_modules',
];

module.exports = config;