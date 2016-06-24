angular.module("personalSite")
  .controller("HomeController", HomeController)
  .controller("ContactController", ContactController)
  .controller("PortfolioController", PortfolioController);

HomeController.$inject = ['$scope'];

ContactController.$inject = ['$scope'];

PortfolioController.$inject = ['$scope'];

function HomeController($scope) {
  console.log("Hello From Home Controller");
}

function ContactController($scope) {
  console.log("Hello from Contact Controller");
}

function PortfolioController($scope) {
  console.log("Hello from Portfolio Controller");
}
