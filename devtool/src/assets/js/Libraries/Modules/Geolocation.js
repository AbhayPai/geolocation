import View from 'ViewPath/View';

export default function Geolocation() {
    let Public = this;
    App.Data.Geolocation = {};

    Public.validate = function() {
        return navigator &&
            navigator.geolocation &&
            location.protocol === 'https:';
    };

    Public.init = function() {
        if (Public.validate()) {
            navigator.geolocation.watchPosition(function (e) {
                App.Data.Geolocation.code = 'success';
                App.Data.Geolocation.speed = e.coords.speed;
                App.Data.Geolocation.heading = e.coords.heading;
                App.Data.Geolocation.accuracy = e.coords.accuracy;
                App.Data.Geolocation.altitude = e.coords.altitude;
                App.Data.Geolocation.latitude = e.coords.latitude;
                App.Data.Geolocation.longitude = e.coords.longitude;
                App.Data.Geolocation.longitude = e.coords.longitude;
                App.Data.Geolocation.altitudeAccuracy =
                    e.coords.altitudeAccuracy;

                new View({
                    selectorId: 'app',
                    templateName: 'location',
                    templateData: App.Data.Geolocation
                }).render();
            }, function() {
                App.Data.Geolocation.code = 'denied';
            }, {
                timeout: 27000,
                maximumAge: 30000,
                enableHighAccuracy: true,
            });
        }
    };
}
