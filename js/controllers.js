angular.module("personalSite")
  .controller("HomeController", HomeController)
  .controller("ContactController", ContactController)
  .controller("PortfolioController", PortfolioController);

HomeController.$inject = ['$scope'];

ContactController.$inject = ['$scope', '$http'];

PortfolioController.$inject = ['$scope'];

function HomeController($scope) {}

function ContactController($scope, $http) {

  $scope.sentMessage = false;

  $scope.sendMessage = function() {
    var data = {
      name: $scope.name,
      sender: $scope.email,
      message: $scope.message
    }
    console.log(data);
    $http.post("https://thawing-journey-19884.herokuapp.com/", data).then(function(){
      console.log("Message Sent!");
      $scope.sentMessage = true;
    })
  }
}

function PortfolioController($scope) {}
