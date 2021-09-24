const { withExpo } = require('@expo/next-adapter');
const withFonts = require('next-fonts');
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});
const withTM = require('next-transpile-modules')([
  'app',
  '@gorhom/bottom-sheet',
  '@gorhom/portal',
  'dripsy',
  '@dripsy/core',
  'expo-next-react-navigation'
]);

const nextConfig = {
  images: {
    disableStaticImages: true
  }
};

module.exports = withPlugins(
  [
    withTM,
    withFonts,
    withImages,
    withBundleAnalyzer,
    [withExpo, { projectRoot: __dirname + '/../..' }]
  ],
  nextConfig
);
