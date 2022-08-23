const chromedriver = require('chromedriver');
module.exports = {
    page_objects_path: ['page_objects'],

    test_settings: {
        default: {
            webdriver: {
                start_process: true,
                server_path: chromedriver.path,
                port: 4444,
                cli_args: ['--port=4444']
            },
            desiredCapabilities: {
                browserName: 'chrome'
            },

        }

    }

};