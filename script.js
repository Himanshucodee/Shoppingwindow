var app = angular.module("myapp", [], function ($compileProvider) {
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|app):/);
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|app):|data:image\//);
});


app.controller('appcontroller', function ($scope, $http) {

  $http.get("staff.php").then(function (response) {
    $scope.staff = response.data;
    console.log(response.data);
  });

  $http.get("product.php").then(function (response) {
    $scope.product = response.data;
    console.log(response.data);
  });

  $http.get("customer.php").then(function (response) {
    $scope.customer = response.data;
    console.log(response.data);
  });

  $scope.staffclick = function (searchstaff) {
    console.log($scope.searchstaff);
    $http.post('staffsearch.php', { "name": $scope.searchstaff }).then(function (response) {
      $scope.staffdata = response.data;

      console.log(response.data);
      // location.reload();
      // $window.location.reload();

    });
  }
  $scope.productclick = function () {
    console.log($scope.searchproduct);
    $http.post('productsearch.php', { "name": $scope.searchproduct }).then(function (response) {
      $scope.productdata = response.data;
      //  location.reload();
      // $window.location.reload();

    });
  }
  $scope.customerclick = function () {
    console.log($scope.searchcustomer);
    $http.post('customersearch.php', { "name": $scope.searchcustomer }).then(function (response) {
      $scope.customerdata = response.data;

      //  location.reload();
      // $window.location.reload();

    });
  }

  $scope.staffenter = function () {
    var request = $http({
      method: "post",
      url: "staffsubmit.php",
      data: {
        ID: $scope.staffid,
        name: $scope.staffname,
      },

      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
    location.reload();
    $window.location.reload();
  }
  $scope.productenter = function () {
    var request = $http({
      method: "post",
      url: "productsubmit.php",
      data: {
        ID: $scope.productid,
        name: $scope.productname,
      },

      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
    location.reload();
    $window.location.reload();
  }
  $scope.customerenter = function () {
    var request = $http({
      method: "post",
      url: "customersubmit.php",
      data: {
        ID: $scope.customerid,
        name: $scope.customername,
      },

      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
    location.reload();
    $window.location.reload();
  }
});


