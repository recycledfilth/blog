angular.module('Blog', [
    'ngRoute',
    'ngResource',
    'Blog.factories',
    'Blog.controllers'
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
    .when('/', {
        templateUrl: 'views/bloglist.html',
        controller: 'BlogListController'
    })
    .when('/compose', {
        templateUrl: 'views/compose.html',
        controller: 'ComposeBlogController'
    })
    .when('/:theId/update', {
        templateUrl: 'views/updatepost.html',
        controller: 'UpdateBlogController'
    })
    .when('/:theId', {
        templateUrl: 'views/singlepost.html',
        controller: 'SinglePostController'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);