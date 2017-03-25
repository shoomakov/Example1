import ready from 'lego-starter-kit/utils/polyfill';
import App from './App';
import config from './config';

const env2oject = require('./modules.js');

ready();
const app = new App({ config });
app.run().then(() => {

  console.log('Environment conf:');
  console.log(env2oject('.env'));

  console.log(`🎃  The server is running at http://127.0.0.1:${app.config.port}/ [${global.timing()}ms]`);
});
