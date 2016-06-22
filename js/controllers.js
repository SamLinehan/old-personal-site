angular.module("personalSite")
  .controller("HomeController", HomeController);

HomeController.$inject = ['$scope'];

function HomeController($scope) {
  console.log("Hello From Home Controller");
}
