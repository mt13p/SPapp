function InitFunck($http, $rootScope) {
  var InitFunck = {};
  
  InitFunck.initialized = false;
  InitFunck.getJSON = function (path) {
    var xhr = new XMLHttpRequest();
    InitFunck.initialized = false;
    xhr.open('GET', path, false);// false - будет ждать пока не выполнит get
    xhr.send();
    if (xhr.status != 200) {
     // обработать ошибку
      alert(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
    } else {
     // вывести результат
     InitFunck.initialized = true;
     return JSON.parse(xhr.responseText);
   //  alert( xhr.responseText ); // responseText -- текст ответа.
    };
  };
  InitFunck.initialize = function () {
    $rootScope.positions=InitFunck.getJSON('Data/position.json');
    $rootScope.json_vzes=InitFunck.getJSON('Data/tbl_vzes.json');
    $rootScope.json_tres=InitFunck.getJSON('Data/tbl_tres.json');
    $rootScope.json_vres=InitFunck.getJSON('Data/tbl_vres.json');
    $rootScope.json_kopses=InitFunck.getJSON('Data/tbl_kops.json');
    $rootScope.json_kros=InitFunck.getJSON('Data/tbl_kro.json');
    $rootScope.json_kpr1s=InitFunck.getJSON('Data/tbl_kpr1.json');
    $rootScope.json_kpr2s=InitFunck.getJSON('Data/tbl_kpr2.json');
    $rootScope.json_kpr3s=InitFunck.getJSON('Data/tbl_kpr3.json');
    $rootScope.json_kpr4s=InitFunck.getJSON('Data/tbl_kpr4.json');
    $rootScope.json_kpzbs=InitFunck.getJSON('Data/tbl_kpzb.json');
    $rootScope.kvz="0.3";
    $rootScope.ktr="1.4";
    $rootScope.kvr="0";
    $rootScope.ops="1";
    $rootScope.ro="0";
    $rootScope.pzb="1";
    InitFunck.changeflagPrem(1);  
    $rootScope.json_prem=$rootScope.json_kpr1s;
  };
  InitFunck.changeflagPrem = function (selectvalue) {
  	$rootScope.flag_prem = selectvalue;
  };
  InitFunck.changeflagPrembyname= function (selname) {
      if ((selname=="Десантно-штурмові війська") || (selname=="Сили спеціальних операцій")) {
          InitFunck.changeflagPrem(2);
      } else {
         InitFunck.changeflagPrem(1);
      }
   };
  InitFunck.hideshowFAB = function (selectvalue) {
  	$rootScope.fabhiddenglobal = selectvalue;
  };
  InitFunck.GetValbyKey=function($sval, $key, $key2, $datain){
     var i, len = $datain.length;
     for (i = 0; i < len; i++) {if ($datain[i][$key]===$sval) {return $datain[i][$key2];}}
     return 0;
  };
  return InitFunck;
}

angular
 .module('myApp', ['ngRoute', 'ngMaterial'])
 
 .factory('InitFunck', InitFunck)
 
 .config(
function($routeProvider, $mdThemingProvider) {
  $routeProvider
  .when('/', {
    templateUrl : 'view/home.html',
    controller  : 'HomeController',
    resolve : {function(InitFunck) {InitFunck.hideshowFAB(true);}
     }
  })
  .when('/calculator', {
    templateUrl : 'view/calculator.html',
    controller  : 'CalculatorController',
    resolve : {function(InitFunck) {
         InitFunck.hideshowFAB(false);
         if (!InitFunck.initialized) {InitFunck.initialize()};
        }
     }
  })
  .when('/positions', {
    templateUrl : 'view/positions.html',
    controller  : 'PositionsController',
    resolve : {function(InitFunck) {
        InitFunck.hideshowFAB(true);
        if (!InitFunck.initialized) {InitFunck.initialize()};
        }
     }
  })
  .when('/about', {
    templateUrl : 'view/about.html',
    controller  : 'AboutController',
    resolve : {function(InitFunck) {InitFunck.hideshowFAB(true);}
     }
  })
  .otherwise({redirectTo: '/'});

$mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark()
$mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark()
$mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark()
$mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark()
$mdThemingProvider.theme('dark-pink').backgroundPalette('pink').dark()
$mdThemingProvider.theme('grey').backgroundPalette('grey')
})

//.run(function($http, $rootScope, InitFunck){})


.controller('MainMenu', function($scope, $mdSidenav, $location, $anchorScroll) {
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
// Set a variable for our button element.
const scrollToTopButton = document.getElementById('js-top');
// Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.
const scrollFunc = () => {
  // Get the current scroll value
  let y = window.scrollY;
  // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
  if (y > 0) {
    scrollToTopButton.className = "top-link show";
  } else {
    scrollToTopButton.className = "top-link hide";
  }
};

  window.addEventListener("scroll", scrollFunc);

  const scrollToTop = () => {
    // Let's set a variable for the number of pixels we are from the top of the document.
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    // If that number is greater than 0, we'll scroll back to 0, or the top of the document.
    // We'll also animate that scroll with requestAnimationFrame:
    // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      // ScrollTo takes an x and a y coordinate.
      // Increase the '10' value to get a smoother/slower scroll!
      window.scrollTo(0, c - c / 10);
    }
  };
  // When the button is clicked, run our ScrolltoTop function above!
  scrollToTopButton.onclick = function(e) {
    e.preventDefault();
    scrollToTop();
  }
 })

.controller('DemoCtrl', function($scope, $mdDialog, $timeout, $rootScope, $mdUtil, InitFunck) {
    var self = this;
    var mainContentArea = document.querySelector("[role='main']");
    var scrollContentEl = mainContentArea.querySelector('md-content[md-scroll-y]');
    $scope.scrollTop = scrollTop;

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
          InitFunck.changeflagPrem(2);
        } else {
          InitFunck.changeflagPrem(1);
        }
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
      function scrollTop() {
        $mdUtil.animateScrollTo(scrollContentEl, 0, 200);
      };
})
 

.controller('HomeController', function($scope, $rootScope, InitFunck) {
  $scope.message = 'Головна сторінка';
})

.controller('CalculatorController', function($scope, $rootScope, $http, $location, $anchorScroll, $window, InitFunck) {
  $scope.message1 = 'Конструктор';
  $scope.message2 = 'грошового забезпечення';
  
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
  	var vr = InitFunck.GetValbyKey($kvr, 'kvr', 'vr', $rootScope.json_vres);
      if (vr>=1) {
  	  if ($rootScope.flag_prem==1) {$rootScope.json_prem=$rootScope.json_kpr2s};
        if ($rootScope.flag_prem==2) {$rootScope.json_prem=$rootScope.json_kpr4s};
      } else {
    	if ($rootScope.flag_prem==1) {$rootScope.json_prem=$rootScope.json_kpr1s};
        if ($rootScope.flag_prem==2) {$rootScope.json_prem=$rootScope.json_kpr3s};
     };
     var tr=InitFunck.GetValbyKey($ktr, 'ktr', 'tr', $rootScope.json_tres);
     var pr=InitFunck.GetValbyKey(tr, 'kpr', 'pr', $rootScope.json_prem);
     return Math.round($kpzb*pr*100*100)/100};
     $scope.spr = function($ktr=0, $kpzb=0, $kvr=0)  {return Math.round(($kpzb*($scope.kpr($ktr, $kpzb, $kvr)/100)*$scope.otr($ktr))*100)/100};
  
   $scope.s1_vz = function() {return $scope.ovz($rootScope.kvz)};
   $scope.s2=$scope.otr($rootScope.ktr);
   $scope.s3=$scope.nvr($rootScope.kvr, $rootScope.ktr, $rootScope.kvz);
   $scope.s4=$scope.nops($rootScope.kvr, $rootScope.ktr, $rootScope.kvz, $rootScope.ops);
   $scope.s5=$scope.sro($rootScope.ktr, $rootScope.ro);
   $scope.s6=$scope.spr($rootScope.ktr, $rootScope.pzb, $rootScope.kvr);
  
   $scope.SumGZ = function() {return Math.round(($scope.s1_vz()+$scope.s2+$scope.s3+$scope.s4+$scope.s5+$scope.s6)*100)/100};
   $scope.SumGZnaryku = function() {return Math.round($scope.SumGZ()*0.985*100)/100};

$scope.searchTermVZ;
      $scope.clearSearchTermVZ = function() {
        $scope.searchTermVZ = '';
      };
 $scope.searchTermTR;
      $scope.clearSearchTermTR= function() {
        $scope.searchTermTR= '';
      };

  const el_clm_calc = document.getElementById('clm_calc');

  window.addEventListener("resize", function() {
    //alert(document.documentElement.clientHeight);
    if (window.matchMedia("(min-width: 400px)").matches) {
        
        el_clm_calc.className = "style_clm_calc full";
        //console.log("Screen width is at least 800px ");
    } else {
        
        el_clm_calc.className = "style_clm_calc min";
        //console.log("Screen less than 800px");
    }
  }); 
})

.controller('PositionsController', function($scope, $rootScope, $mdDialog, InitFunck) {
  $scope.message = 'Типові посади';
 
   $scope.CalcPosition = function(position) {
      $rootScope.kvz=InitFunck.GetValbyKey(position.vz, 'vz', 'kvz', $rootScope.json_vzes);
      $rootScope.ktr=InitFunck.GetValbyKey(position.tr, 'tr', 'ktr', $rootScope.json_tres);
      $rootScope.kvr=InitFunck.GetValbyKey(position.vr, 'vr', 'kvr', $rootScope.json_vres);
      $rootScope.ops="1";
      $rootScope.ro=InitFunck.GetValbyKey(position.ro, 'ro', 'kro', $rootScope.json_kros);
      $rootScope.pzb="1";
      $rootScope.json_prem=$rootScope.json_kpr1s;
      $rootScope.flag_prem=1;
    };
    $scope.DetailsPosition = function(position, event) {
    var ktr=InitFunck.GetValbyKey(position.tr, 'tr', 'ktr', $rootScope.json_tres);
    $mdDialog.show(
      $mdDialog.alert()
        .title(position.name)
        .textContent(position.vz + " т.р. " + position.tr + " в.р. " + position.vr + " р.о. " + position.ro)
        .ariaLabel('Порівняння посади')
        .ok('Закрити')
        .targetEvent(event)
    );
  };
})
    
.controller('AboutController', function($scope, $rootScope, InitFunck) {
  $scope.message = 'Про сторінку';
});

/* function handleFileSelect(evt) {
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
document.getElementById('files').addEventListener('change', handleFileSelect, false); */
