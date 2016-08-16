'use strict';

angular.
    module('phonecatApp').run(function($rootScope){
        $rootScope.themes= themes;
        $rootScope.theme=themes[1];

        $rootScope.switchTheme = switchTheme;

        function switchTheme(theme)
        {
            $rootScope.theme=theme;
        }

    });
