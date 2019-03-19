require('SassPath/index.scss');

import BaseController from 'ControllerPath/BaseController';

import Geolocation from 'LibrariesPath/Modules/Geolocation';

/*eslint no-console: ["error", { allow: ["log"] }] */
new BaseController().registerController({
    preprocess: function() {
        new Geolocation().init();
    },

    render: function() {
    },

    ready: function() {
    }
});
