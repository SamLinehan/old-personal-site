var app = angular.module('personalSite', ['ui.router', 'angular-loading-bar', 'ngAnimate'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider.state("home", {
      templateUrl: "templates/home.html",
      controller: "HomeController",
      url: "/home"
    }).state("contact", {
      templateUrl: "templates/contact.html",
      controller: "ContactController",
      url: "/contact"
    }).state("portfolio", {
      templateUrl: "templates/portfolio.html",
      controller: "PortfolioController",
      url: "/portfolio"
    });
  })
  .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
    cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
  }]);
