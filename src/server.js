import ready from 'lego-starter-kit/utils/polyfill';
import App from './App';
import config from './config';
import _ from 'lodash';


const envfile = require('envfile');
// const env = require('dotenv').config();
const sourcePath = '.env';

function env2oject(sourcePath) {
  const simpleEnv = envfile.parseFileSync(sourcePath);

  let embedded = {};
  _.forEach(simpleEnv, (value, key) => {
    _.set(embedded, key, value)
  });

  return embedded;
}

ready();
const app = new App({ config });
app.run().then(() => {

  console.log(env2oject(sourcePath));

  console.log(`🎃  The server is running at http://127.0.0.1:${app.config.port}/ [${global.timing()}ms]`);
});
