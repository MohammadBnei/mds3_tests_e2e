nightwatch_config = {
  "src_folders": ["test"],

  "webdriver": {
    "start_process": true,
    "server_path": "node_modules/.bin/chromedriver",
    "port": 9515
  },

  "test_settings": {
    "default": {
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    }
  }
};

module.exports = (function (settings) {
  settings.test_workers = false;
  settings.webdriver.server_path = require('chromedriver').path;
  return settings;
})(nightwatch_config);
