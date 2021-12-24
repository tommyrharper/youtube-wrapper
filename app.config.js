const config = require('dotenv').config();

export default {
  expo: {
    name: 'youtube-wrapper',
    slug: 'youtube-wrapper',
    version: '1.0.0',
    sdkVersion: '44.0.0',
    platforms: ['ios', 'android', 'web'],
    android: {
      package: 'com.tom.happytube',
    },
    ios: {
      bundleIdentifier: 'com.tom.happytube',
    },
    extra: {
      googleApiKey: config.parsed.GOOGLE_API_KEY,
    },
  },
};
