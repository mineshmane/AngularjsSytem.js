var myApp = angular.module('myApp', ['ui.router']);
myApp.config(function ($stateProvider, $urlRouterProvider) {
    console.log("index ts file running");
    $stateProvider
        .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'EmployeeCtrl'
    })
        .state('l', {
        url: '/l',
        templateUrl: 'views/l.html',
    });
    $urlRouterProvider.otherwise('/login');
});
//# sourceMappingURL=index.js.map