import _ from 'lodash';

const envfile = require('envfile');

function env2oject(sourcePath) {
  const simpleEnv = envfile.parseFileSync(sourcePath);

  let embedded = {};
  _.forEach(simpleEnv, (value, key) => {
    _.set(embedded, key, value)
  });

  return embedded;
}

module.exports = env2oject;
