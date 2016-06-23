angular.module("personalSite")
  .controller("HomeController", HomeController)
  .controller("ContactController", ContactController);

HomeController.$inject = ['$scope'];

ContactController.$inject = ['$scope'];

function HomeController($scope) {
  console.log("Hello From Home Controller");
}

function ContactController($scope) {
  console.log("Hello from Contact Controller");
}
