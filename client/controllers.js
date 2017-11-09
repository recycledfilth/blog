angular.module('Blog.controllers', [])
.controller('BlogListController', ['$scope', 'Post', function($scope, Post) {
    $scope.posts = Post.query();
}])
.controller('ComposeBlogController', ['$scope', 'Post', 'User', 'Category', '$location', function($scope, Post, User, Category, $location) {
    $scope.categories = Category.query();
    $scope.users = User.query();

    $scope.save = function() {
        let p = new Post({
            title: $scope.title,
            content: $scope.content,
            categoryid: $scope.categoryid,
            userid: $scope.userid
        });

        // kick of a POST request to /api/posts, with the body being the object literal above
        p.$save(function(success) {
            $location.path('/');
        }, function(err) {
            console.log(err);
        });
    }
}])
.controller('UpdateBlogController', ['$scope', 'Post', 'Category', '$location', '$routeParams', function($scope, Post, Category, $location, $routeParams) {
    $scope.categories = Category.query();

    $scope.post = Post.get({ id: $routeParams.theId }, function(success) {
        // Turning categoryid response from the server (which is an integer)
        // into a string, so that it will match with the string option of the 
        // category select box in the html, so it will be preselected
        $scope.post.categoryid = String($scope.post.categoryid);
    });

    $scope.update = function() {
        $scope.post.$update(function() {
            $location.path('/');
        });
    }
}])
.controller('SinglePostController', ['$scope', 'Post', '$location', '$routeParams', function($scope, Post, $location, $routeParams) {
    $scope.post = Post.get({ id: $routeParams.theId });

    $scope.deletePost = function() {
        let answer = confirm('Are you sure you want to delete this blog post?');
        if (answer === true) {
            $scope.post.$delete(function() {
                $location.path('/');
            });
        }
    }

    $scope.goToUpdate = function() {
        $location.path(`/${$routeParams.theId}/update`);
    }
}]);