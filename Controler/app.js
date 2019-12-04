var app = angular.module('myApp', ['ngRoute', 'ngMaterial']);

app.config(
function($routeProvider, $mdThemingProvider) {
  $routeProvider
  .when('/', {
    templateUrl : 'view/home.html',
    controller  : 'HomeController',
  })
  .when('/calculator', {
    templateUrl : 'view/calculator.html',
    controller  : 'CalculatorController'
  })
  .when('/about', {
    templateUrl : 'view/about.html',
    controller  : 'AboutController'
  })
  .otherwise({redirectTo: '/'});
//}

//function($mdThemingProvider) {
 $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark()
$mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark()
$mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark()
$mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark()
$mdThemingProvider.theme('dark-pink').backgroundPalette('pink').dark()
$mdThemingProvider.theme('grey').backgroundPalette('grey')
}
);

app.controller('MainMenu', function($scope, $mdSidenav, $location, $anchorScroll) {
	//$scope.$on("$mdMenuClose", function() {
      // alert("menu closing");
      //$scope.hover=false;
  //  });
  $scope.gotoBottom = function() {
      $location.hash('top');
      $anchorScroll();
    };
    $scope.toggleSidenav= buildToggler('left');
    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }
 });

app.controller('DemoCtrl', function($scope, $mdDialog, $timeout, $rootScope) {
    var self = this;
      self.topDirections = ['left', 'up'];
      self.bottomDirections = ['down', 'right'];
      self.availableModes = ['md-fling', 'md-scale'];
      self.selectedMode = 'md-fling';
      self.availableDirections = ['up', 'down', 'left', 'right'];
      self.selectedDirection = 'left';
      self.items = [
        { name: "Сухопутні війська", icon: "img/icons/Emblem_of_the_Ukrainian_Ground_Forces.svg", direction: "left" },
        { name: "Повітряні сили", icon: "img/icons/Emblem_of_the_Ukrainian_Air_Force.svg", direction: "left" },
        { name: "Військово-морські сили", icon: "img/icons/Emblem_of_the_Ukrainian_Navy.svg", direction: "left" },
        { name: "Десантно-штурмові війська", icon: "img/icons/DSHV.svg", direction: "left" },
        { name: "Сили спеціальних операцій", icon: "img/icons/USF_emblem.svg", direction: "left" }
      ];
      //$rootScope.fabhiddenglobal=false;
      self.hidden = $rootScope.fabhiddenglobal;
      self.isOpen = false;
      self.hover = false;
      
      // On opening, add a delayed property which shows tooltips after the speed dial has opened
      // so that they have the proper position; if closing, immediately hide the tooltips
      $scope.$watch('demo.isOpen', function(isOpen) {
        if (isOpen) {
          $timeout(function() {
            $scope.tooltipVisible = self.isOpen;
          }, 600);
        } else {
          $scope.tooltipVisible = self.isOpen;
        }
      }); 
      self.printBranch = function(item) {
        document.getElementById('SelectedBranch').innerHTML = item.name + ' ЗСУ';
        if ((item.name=="Десантно-штурмові війська") || (item.name=="Сили спеціальних операцій")) {
          $rootScope.flag_prem=2
        } else {
          $rootScope.flag_prem=1
        }
        //$scope.ChangePr($scope.kvr);
  	 };
      self.openDialog = function($event, item) {
      	//ng-click="demo.openDialog($event, item)"
        // Show the dialog
        $mdDialog.show({
          clickOutsideToClose: true,
          controller: function($mdDialog) {
            // Save the clicked item
            this.item = item;

            // Setup some handlers
            this.close = function() {
              $mdDialog.cancel();
            };
            this.submit = function() {
          	document.getElementById('SelectedBranch').innerHTML = item.name + ' ЗСУ';
              $mdDialog.hide();
            };
          },
          controllerAs: 'dialog',
          templateUrl: 'dialog.html',
          targetEvent: $event
        });
      };
});
 
    

app.controller('HomeController', function($scope, $rootScope) {
  $scope.message = 'Головна сторінка';
  $rootScope.fabhiddenglobal = true;
});

app.controller('CalculatorController', 
  function($scope, $rootScope, $http, $location, $anchorScroll, $window) {
  $rootScope.fabhiddenglobal = false;
  $http.get('Data/tbl_vzes.json').then(
      function(response) {
      $scope.json_vzes = response.data;
       });
    $http.get('Data/tbl_tres.json').then(
      function(response) {
      $scope.json_tres = response.data;
       }); 
     $http.get('Data/tbl_vres.json').then(
      function(response) {
      $scope.json_vres = response.data;
       }); 
       $http.get('Data/tbl_kops.json').then(
      function(response) {
      $scope.json_kopses = response.data;
       }); 
       $http.get('Data/tbl_kro.json').then(
      function(response) {
      $scope.json_kros = response.data;
       }); 
       $http.get('Data/tbl_kpr1.json').then(
      function(response) {
      $scope.json_kpr1s = response.data;
       }); 
       $http.get('Data/tbl_kpr2.json').then(
      function(response) {
      $scope.json_kpr2s = response.data;
       }); 
       $http.get('Data/tbl_kpr3.json').then(
      function(response) {
      $scope.json_kpr3s = response.data;
       }); 
       $http.get('Data/tbl_kpr4.json').then(
      function(response) {
      $scope.json_kpr4s = response.data;
       }); 
       $http.get('Data/tbl_kpzb.json').then(
      function(response) {
      $scope.json_kpzbs = response.data;
       }); 
    
     $scope.GetValbyKey=function($tr, $key, $key2, $datain){
     var i, len = $datain.length;
      for (i = 0; i < len; i++) {
        if ($datain[i][$key]===$tr) {
            return $datain[i][$key2];
        }
      }
      return 0;
    };

    
   
    
  $scope.message1 = 'Калькулятор';
  $scope.message2 = 'грошового забезпечення';
  $scope.kvz="0.3";
  $scope.ktr="1.4";
  $scope.kvr="0";
  $scope.ops="1";
  $scope.ro="0";
  $scope.pzb="1";
  $scope.json_prem=$scope.json_kpr1s;
  $rootScope.flag_prem=1;
  
  $scope.ovz = function($kvz=0) {return Math.round(($kvz*1762)/10)*10};
  $scope.otr = function($ktr=0) {return Math.round(($ktr*1762)/10)*10};
  $scope.knvr = function($kvr=0) {return $kvr*100};
  $scope.nvr = function($kvr=0, $ktr=0, $kvz=0)  {return Math.round(($kvr*($scope.ovz($kvz)+$scope.otr($ktr)))*100)/100};
  $scope.kops = function($ops=1) {
     var res=Math.ceil(($ops*0.65*100)*10)/10;
     if (res>100) {return 100} else {return res};
      };
  $scope.nops = function($kvr=0, $ktr=0, $kvz=0, $ops=1) {return Math.round((($scope.ovz($kvz)+$scope.otr($ktr)+$scope.nvr($kvr, $ktr, $kvz))*($scope.kops($ops)/100))*100)/100};
  $scope.kro = function($kro=0) {return $kro*100};
  $scope.sro = function($ktr=0, $kro=0)  {return Math.round(($kro*$scope.otr($ktr))*100)/100};
  $scope.kpr = function($ktr=0, $kpzb=0, $kvr=0) {
  	var vr = $scope.GetValbyKey($kvr, 'kvr', 'vr', $scope.json_vres);
      if (vr>=1) {
  	  if ($rootScope.flag_prem==1) {$scope.json_prem=$scope.json_kpr2s};
        if ($rootScope.flag_prem==2) {$scope.json_prem=$scope.json_kpr4s};
      } else {
    	if ($rootScope.flag_prem==1) {$scope.json_prem=$scope.json_kpr1s};
        if ($rootScope.flag_prem==2) {$scope.json_prem=$scope.json_kpr3s};
     };
     var tr=$scope.GetValbyKey($ktr, 'ktr', 'tr', $scope.json_tres);
     var pr=$scope.GetValbyKey(tr, 'kpr', 'pr', $scope.json_prem);
     return Math.round($kpzb*pr*100*100)/100};
  $scope.spr = function($ktr=0, $kpzb=0, $kvr=0)  {return Math.round(($kpzb*($scope.kpr($ktr, $kpzb, $kvr)/100)*$scope.otr($ktr))*100)/100};
  $scope.SumGZ = function() {return Math.round(($scope.s1+$scope.s2+$scope.s3+$scope.s4+$scope.s5+$scope.s6)*100)/100};
  $scope.SumGZnaryku = function() {return Math.round($scope.SumGZ()*0.985*100)/100};
});
    
app.controller('AboutController', function($scope, $rootScope) {
  $scope.message = 'Про сторінку';
  $rootScope.fabhiddenglobal = true;
});


function handleFileSelect(evt) {
var files = evt.target.files; // FileList object
  // files is a FileList of File objects. List some properties.
var output = [];
for (var i = 0, f; f = files[i]; i++) {
output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
f.size, ' bytes, last modified: ',
f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
'</li>');
}
document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
}
document.getElementById('files').addEventListener('change', handleFileSelect, false);

	
