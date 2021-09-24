module.exports = function (api) {
  api.cache(true);

  return {
    babelrcRoots: ['.', './packages/*'],
    presets: ['@expo/next-adapter/babel'],
    plugins: ['react-native-reanimated/plugin'],
    overrides: [
      {
        test: './node_modules/react-native-reanimated/*',
        plugins: ['@babel/plugin-proposal-class-properties']
      },
      {
        test: './node_modules/@expo/vector-icons/*',
        plugins: ['@babel/plugin-proposal-class-properties']
      }
    ]
  };
};
