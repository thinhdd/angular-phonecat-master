'use strict';

angular.
    module('phonecatApp').
    config(['$urlRouterProvider', '$stateProvider',
        function config($urlRouterProvider, $stateProvider) {
            $urlRouterProvider.otherwise('/phones');

            $stateProvider.
                state('phones', {
                    url: '/phones',
                    template: '<phone-list></phone-list>'
                }).
                state('phoneDetail', {
                    url: '/phones/:phoneId',
                    template: '<phone-detail></phone-detail>'
                });

        }
    ]);
