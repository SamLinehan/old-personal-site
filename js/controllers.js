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
    $http.post("http://localhost:3000", data).then(function(){
      console.log("Message Sent!");
      $scope.sentMessage = true;
    })
  }
}

function PortfolioController($scope) {}
