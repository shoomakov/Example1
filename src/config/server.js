import config from 'lego-starter-kit/utils/config';
import baseConfig from 'lego-starter-kit/config';

export default config.server(baseConfig, {
  client: require('./client').default, // eslint-disable-line

  env: process.env.NODE_ENV || process.env.ENV || 'development',
  port: process.env.PORT || 8080,

  protocol: 'http',
  db: {
    // uri: process.env.DB || 'mongodb://lsk-example1:lsk-example1-pass@publicdb.mgbeta.ru:27000/lsk-example1',
    uri: process.env.DB || 'mongodb://localhost:27017/example1',
  },
  jwt: {
    secret: 'REPLACE_ME_PLEASE',
  },
});
