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
  InitFunck.getPosition =function()  {
  	var tmpJSON;
      InitFunck.initialized = false;
      tmpJSON=[{"name":"Текелажник", "vz":"солдат", "tr":"1", "vr":"від 1 до 4", "ro":"без допуску"},
 {"name":"Стрілець", "vz":"солдат", "tr":"3", "vr":"від 1 до 4", "ro":"без допуску"},
 {"name":"Механік-водій", "vz":"молодший сержант", "tr":"5", "vr":"від 5 до 9", "ro":"без допуску"},
 {"name":"Командир взводу", "vz":"лейтенант", "tr":"12", "vr":"від 5 до 9", "ro":"без допуску"},
  {"name":"Командир роти", "vz":"капітан", "tr":"20", "vr":"від 10 до 14", "ro":"без допуску"},
  {"name":"Командир батальйону", "vz":"майор", "tr":"25", "vr":"від 15 до 19", "ro":"3 форма"},
  {"name":"Командир полку", "vz":"полковник", "tr":"31", "vr":"від 20 до 24", "ro":"2 форма"},
  {"name":"Командир бригади", "vz":"полковник", "tr":"39", "vr":"25 і більше", "ro":"1 форма"},
  {"name":"Старший офіцер", "vz":"підполковник", "tr":"30", "vr":"від 20 до 24", "ro":"3 форма"},
  {"name":"Заступник нач. від. 39 т.р.", "vz":"підполковник", "tr":"39", "vr":"від 20 до 24", "ro":"без допуску"},
  {"name":"Заступник нач. від. 46 т.р.", "vz":"полковник", "tr":"46", "vr":"від 20 до 24", "ro":"без допуску"},
  {"name":"Нач. сл. 44 т.р.", "vz":"підполковник", "tr":"44", "vr":"від 20 до 24", "ro":"2 форма"}];
  InitFunck.initialized = true;
  return tmpJSON;
  	};
  
  InitFunck.gettbl_vzes =function()  {
  	var tmpJSON;
      InitFunck.initialized = false;
      tmpJSON=[
  {"kvz":"0.25", "vz":"рекрут"},
  {"kvz":"0.3", "vz":"солдат"},
  {"kvz":"0.34", "vz":"старший солдат"},
  {"kvz":"0.38", "vz":"молодший сержант"},
  {"kvz":"0.42", "vz":"сержант"},
  {"kvz":"0.46", "vz":"старший сержант"},
  {"kvz":"0.5", "vz":"старшина"},
  {"kvz":"0.5", "vz":"головний сержант"},
  {"kvz":"0.54", "vz":"прапорщик"},
  {"kvz":"0.54", "vz":"штаб-сержант"},
  {"kvz":"0.58", "vz":"старший прапорщик"},
  {"kvz":"0.58", "vz":"майстер-сержант"},
  {"kvz":"0.59", "vz":"старший майстер-сержант"},
  {"kvz":"0.6", "vz":"головний майстер-сержант"},
  {"kvz":"0.62", "vz":"молодший лейтенант"},
  {"kvz":"0.64", "vz":"лейтенант"},
  {"kvz":"0.68", "vz":"старший лейтенант"},
  {"kvz":"0.72", "vz":"капітан"},
  {"kvz":"0.76", "vz":"майор"},
  {"kvz":"0.8", "vz":"підполковник"},
  {"kvz":"0.84", "vz":"полковник"},
  {"kvz":"0.88", "vz":"бригадний генерал"},
  {"kvz":"0.92", "vz":"генерал-майор"},
  {"kvz":"0.96", "vz":"генерал-лейтенант"},
  {"kvz":"0.96", "vz":"генерал-полковник"},
  {"kvz":"1.0", "vz":"генерал армії України"}];
  InitFunck.initialized = true;
  return tmpJSON;
  	};
  
  InitFunck.gettbl_tres =function()  {
  	var tmpJSON;
      InitFunck.initialized = false;
      tmpJSON=[
  {"ktr":"1.4", "tr":"1"},
  {"ktr":"1.45", "tr":"2"},
  {"ktr":"1.5", "tr":"3"},
  {"ktr":"1.55", "tr":"4"},
  {"ktr":"1.6", "tr":"5"},
  {"ktr":"1.65", "tr":"6"},
  {"ktr":"1.7", "tr":"7"},
  {"ktr":"1.75", "tr":"8"},
  {"ktr":"1.8", "tr":"9"},
  {"ktr":"1.85", "tr":"10"},
  {"ktr":"1.9", "tr":"11"},
  {"ktr":"1.95", "tr":"12"},
  {"ktr":"2.00", "tr":"13"},
  {"ktr":"2.08", "tr":"14"},
  {"ktr":"2.16", "tr":"15"},
  {"ktr":"2.24", "tr":"16"},
  {"ktr":"2.32", "tr":"17"},
  {"ktr":"2.4", "tr":"18"},
  {"ktr":"2.48", "tr":"19"},
  {"ktr":"2.56", "tr":"20"},
  {"ktr":"2.64", "tr":"21"},
  {"ktr":"2.72", "tr":"22"},
  {"ktr":"2.8", "tr":"23"},
  {"ktr":"2.88", "tr":"24"},
  {"ktr":"2.96", "tr":"25"},
  {"ktr":"3.04", "tr":"26"},
  {"ktr":"3.12", "tr":"27"},
  {"ktr":"3.2", "tr":"28"},
  {"ktr":"3.28", "tr":"29"},
  {"ktr":"3.36", "tr":"30"},
  {"ktr":"3.44", "tr":"31"},
  {"ktr":"3.52", "tr":"32"},
  {"ktr":"3.6", "tr":"33"},
  {"ktr":"3.68", "tr":"34"},
  {"ktr":"3.76", "tr":"35"},
  {"ktr":"3.84", "tr":"36"},
  {"ktr":"3.92", "tr":"37"},
  {"ktr":"4", "tr":"38"},
  {"ktr":"4.08", "tr":"39"},
  {"ktr":"4.16", "tr":"40"},
  {"ktr":"4.24", "tr":"41"},
  {"ktr":"4.32", "tr":"42"},
  {"ktr":"4.4", "tr":"43"},
  {"ktr":"4.48", "tr":"44"},
  {"ktr":"4.56", "tr":"45"},
  {"ktr":"4.64", "tr":"46"},
  {"ktr":"4.72", "tr":"47"},
  {"ktr":"4.8", "tr":"48"},
  {"ktr":"4.88", "tr":"49"},
  {"ktr":"4.96", "tr":"50"},
  {"ktr":"5.04", "tr":"51"},
  {"ktr":"5.12", "tr":"52"},
  {"ktr":"5.2", "tr":"53"},
  {"ktr":"5.28", "tr":"54"},
  {"ktr":"5.36", "tr":"55"},
  {"ktr":"5.44", "tr":"56"},
  {"ktr":"5.52", "tr":"57"},
  {"ktr":"5.6", "tr":"58"},
  {"ktr":"5.68", "tr":"59"},
  {"ktr":"5.76", "tr":"60"}
];
  InitFunck.initialized = true;
  return tmpJSON;
  	};
  
  InitFunck.gettbl_vres =function()  {
  	var tmpJSON;
      InitFunck.initialized = false;
      tmpJSON=[
  {"kvr":"0", "vr":"0"},
  {"kvr":"0.25", "vr":"від 1 до 4"},
  {"kvr":"0.3", "vr":"від 5 до 9"},
  {"kvr":"0.35", "vr":"від 10 до 14"},
  {"kvr":"0.4", "vr":"від 15 до 19"},
  {"kvr":"0.45", "vr":"від 20 до 24"},
  {"kvr":"0.5", "vr":"25 і більше"}
];
  InitFunck.initialized = true;
  return tmpJSON;
  	};
  
  InitFunck.gettbl_kops =function()  {
  	var tmpJSON;
      InitFunck.initialized = false;
      tmpJSON=[
  {"kops":"1", "ops":"1"},
  {"kops":"1.05", "ops":"1.05"},
  {"kops":"1.1", "ops":"1.1"},
  {"kops":"1.2", "ops":"1.2"},
  {"kops":"1.25", "ops":"1.25"},
  {"kops":"1.3", "ops":"1.3"},
  {"kops":"1.35", "ops":"1.35"},
  {"kops":"1.45", "ops":"1.45"},
  {"kops":"1.55", "ops":"1.55"}
];
  InitFunck.initialized = true;
  return tmpJSON;
  	};
  
  InitFunck.gettbl_kro =function()  {
  	var tmpJSON;
      InitFunck.initialized = false;
      tmpJSON=[
  {"kro":"0", "ro":"без допуску"},
  {"kro":"0.1", "ro":"3 форма"},
  {"kro":"0.15", "ro":"2 форма"},
  {"kro":"0.2", "ro":"1 форма"}
];
  InitFunck.initialized = true;
  return tmpJSON;
  	};
  
  InitFunck.gettbl_kpr1 =function()  {
  	var tmpJSON;
      InitFunck.initialized = false;
      tmpJSON=[
  {"kpr":"0", "pr":"0"},
  {"kpr":"1", "pr":"3.33"},
  {"kpr":"2", "pr":"3.18"},
  {"kpr":"3", "pr":"3.03"},
  {"kpr":"4", "pr":"2.89"},
  {"kpr":"5", "pr":"2.77"},
  {"kpr":"6", "pr":"2.64"},
  {"kpr":"7", "pr":"2.52"},
  {"kpr":"8", "pr":"2.49"},
  {"kpr":"9", "pr":"2.39"},
  {"kpr":"10", "pr":"2.23"},
  {"kpr":"11", "pr":"2.16"},
  {"kpr":"12", "pr":"2.02"},
  {"kpr":"13", "pr":"1.98"},
  {"kpr":"14", "pr":"1.89"},
  {"kpr":"15", "pr":"1.79"},
  {"kpr":"16", "pr":"1.71"},
  {"kpr":"17", "pr":"1.63"},
  {"kpr":"18", "pr":"1.59"},
  {"kpr":"19", "pr":"1.55"},
  {"kpr":"20", "pr":"1.49"},
  {"kpr":"21", "pr":"1.4"},
  {"kpr":"22", "pr":"1.4"},
  {"kpr":"23", "pr":"1.4"},
  {"kpr":"24", "pr":"1.4"},
  {"kpr":"25", "pr":"1.4"},
  {"kpr":"26", "pr":"1.4"},
  {"kpr":"27", "pr":"1.4"},
  {"kpr":"28", "pr":"1.4"},
  {"kpr":"29", "pr":"1.4"},
  {"kpr":"30", "pr":"1.4"},
  {"kpr":"31", "pr":"1.4"},
  {"kpr":"32", "pr":"1.4"},
  {"kpr":"33", "pr":"1.4"},
  {"kpr":"34", "pr":"1.4"},
  {"kpr":"35", "pr":"1.4"},
  {"kpr":"36", "pr":"1.4"},
  {"kpr":"37", "pr":"1.4"},
  {"kpr":"38", "pr":"1.4"},
  {"kpr":"39", "pr":"1.4"},
  {"kpr":"40", "pr":"1.4"},
  {"kpr":"41", "pr":"1.4"},
  {"kpr":"42", "pr":"1.4"},
  {"kpr":"43", "pr":"1.4"},
  {"kpr":"44", "pr":"1.4"},
  {"kpr":"45", "pr":"1.4"},
  {"kpr":"46", "pr":"1.4"},
  {"kpr":"47", "pr":"1.4"},
  {"kpr":"48", "pr":"1.4"},
  {"kpr":"49", "pr":"1.4"},
  {"kpr":"50", "pr":"1.4"},
  {"kpr":"51", "pr":"1.4"},
  {"kpr":"52", "pr":"1.4"},
  {"kpr":"53", "pr":"1.4"},
  {"kpr":"54", "pr":"1.4"},
  {"kpr":"55", "pr":"1.4"},
  {"kpr":"56", "pr":"1.4"},
  {"kpr":"57", "pr":"1.4"},
  {"kpr":"58", "pr":"1.4"},
  {"kpr":"59", "pr":"1.4"},
  {"kpr":"60", "pr":"1.4"}
];
  InitFunck.initialized = true;
  return tmpJSON;
  	};
  
  InitFunck.gettbl_kpr2 =function()  {
  	var tmpJSON;
      InitFunck.initialized = false;
      tmpJSON=[
  {"kpr":"0", "pr":"0"},
  {"kpr":"1", "pr":"2.84"},
  {"kpr":"2", "pr":"2.7"},
  {"kpr":"3", "pr":"2.54"},
  {"kpr":"4", "pr":"2.47"},
  {"kpr":"5", "pr":"2.4"},
  {"kpr":"6", "pr":"2.3"},
  {"kpr":"7", "pr":"2.22"},
  {"kpr":"8", "pr":"2.17"},
  {"kpr":"9", "pr":"2.12"},
  {"kpr":"10", "pr":"2.1"},
  {"kpr":"11", "pr":"2.06"},
  {"kpr":"12", "pr":"2.02"},
  {"kpr":"13", "pr":"1.98"},
  {"kpr":"14", "pr":"1.89"},
  {"kpr":"15", "pr":"1.79"},
  {"kpr":"16", "pr":"1.71"},
  {"kpr":"17", "pr":"1.63"},
  {"kpr":"18", "pr":"1.59"},
  {"kpr":"19", "pr":"1.55"},
  {"kpr":"20", "pr":"1.49"},
  {"kpr":"21", "pr":"1.4"},
  {"kpr":"22", "pr":"1.4"},
  {"kpr":"23", "pr":"1.4"},
  {"kpr":"24", "pr":"1.4"},
  {"kpr":"25", "pr":"1.4"},
  {"kpr":"26", "pr":"1.4"},
  {"kpr":"27", "pr":"1.4"},
  {"kpr":"28", "pr":"1.4"},
  {"kpr":"29", "pr":"1.4"},
  {"kpr":"30", "pr":"1.4"},
  {"kpr":"31", "pr":"1.4"},
  {"kpr":"32", "pr":"1.4"},
  {"kpr":"33", "pr":"1.4"},
  {"kpr":"34", "pr":"1.4"},
  {"kpr":"35", "pr":"1.4"},
  {"kpr":"36", "pr":"1.4"},
  {"kpr":"37", "pr":"1.4"},
  {"kpr":"38", "pr":"1.4"},
  {"kpr":"39", "pr":"1.4"},
  {"kpr":"40", "pr":"1.4"},
  {"kpr":"41", "pr":"1.4"},
  {"kpr":"42", "pr":"1.4"},
  {"kpr":"43", "pr":"1.4"},
  {"kpr":"44", "pr":"1.4"},
  {"kpr":"45", "pr":"1.4"},
  {"kpr":"46", "pr":"1.4"},
  {"kpr":"47", "pr":"1.4"},
  {"kpr":"48", "pr":"1.4"},
  {"kpr":"49", "pr":"1.4"},
  {"kpr":"50", "pr":"1.4"},
  {"kpr":"51", "pr":"1.4"},
  {"kpr":"52", "pr":"1.4"},
  {"kpr":"53", "pr":"1.4"},
  {"kpr":"54", "pr":"1.4"},
  {"kpr":"55", "pr":"1.4"},
  {"kpr":"56", "pr":"1.4"},
  {"kpr":"57", "pr":"1.4"},
  {"kpr":"58", "pr":"1.4"},
  {"kpr":"59", "pr":"1.4"},
  {"kpr":"60", "pr":"1.4"}
];
  InitFunck.initialized = true;
  return tmpJSON;
  	};
  
  InitFunck.gettbl_kpr3 =function()  {
  	var tmpJSON;
      InitFunck.initialized = false;
      tmpJSON=[
  {"kpr":"0", "pr":"0"},
  {"kpr":"1", "pr":"3.52"},
  {"kpr":"2", "pr":"3.41"},
  {"kpr":"3", "pr":"3.29"},
  {"kpr":"4", "pr":"3.2"},
  {"kpr":"5", "pr":"3.07"},
  {"kpr":"6", "pr":"3.01"},
  {"kpr":"7", "pr":"2.91"},
  {"kpr":"8", "pr":"2.83"},
  {"kpr":"9", "pr":"2.78"},
  {"kpr":"10", "pr":"2.74"},
  {"kpr":"11", "pr":"2.66"},
  {"kpr":"12", "pr":"2.56"},
  {"kpr":"13", "pr":"2.49"},
  {"kpr":"14", "pr":"2.4"},
  {"kpr":"15", "pr":"2.33"},
  {"kpr":"16", "pr":"2.24"},
  {"kpr":"17", "pr":"2.17"},
  {"kpr":"18", "pr":"2.11"},
  {"kpr":"19", "pr":"2.05"},
  {"kpr":"20", "pr":"1.99"},
  {"kpr":"21", "pr":"1.92"},
  {"kpr":"22", "pr":"1.84"},
  {"kpr":"23", "pr":"1.79"},
  {"kpr":"24", "pr":"1.74"},
  {"kpr":"25", "pr":"1.69"},
  {"kpr":"26", "pr":"1.64"},
  {"kpr":"27", "pr":"1.59"},
  {"kpr":"28", "pr":"1.55"},
  {"kpr":"29", "pr":"1.47"},
  {"kpr":"30", "pr":"1.4"},
  {"kpr":"31", "pr":"1.4"},
  {"kpr":"32", "pr":"1.4"},
  {"kpr":"33", "pr":"1.4"},
  {"kpr":"34", "pr":"1.4"},
  {"kpr":"35", "pr":"1.4"},
  {"kpr":"36", "pr":"1.4"},
  {"kpr":"37", "pr":"1.4"},
  {"kpr":"38", "pr":"1.4"},
  {"kpr":"39", "pr":"1.4"},
  {"kpr":"40", "pr":"1.4"},
  {"kpr":"41", "pr":"1.4"},
  {"kpr":"42", "pr":"1.4"},
  {"kpr":"43", "pr":"1.4"},
  {"kpr":"44", "pr":"1.4"},
  {"kpr":"45", "pr":"1.4"},
  {"kpr":"46", "pr":"1.4"},
  {"kpr":"47", "pr":"1.4"},
  {"kpr":"48", "pr":"1.4"},
  {"kpr":"49", "pr":"1.4"},
  {"kpr":"50", "pr":"1.4"},
  {"kpr":"51", "pr":"1.4"},
  {"kpr":"52", "pr":"1.4"},
  {"kpr":"53", "pr":"1.4"},
  {"kpr":"54", "pr":"1.4"},
  {"kpr":"55", "pr":"1.4"},
  {"kpr":"56", "pr":"1.4"},
  {"kpr":"57", "pr":"1.4"},
  {"kpr":"58", "pr":"1.4"},
  {"kpr":"59", "pr":"1.4"},
  {"kpr":"60", "pr":"1.4"}
];
  InitFunck.initialized = true;
  return tmpJSON;
  	};
  
  InitFunck.gettbl_kpr4 =function()  {
  	var tmpJSON;
      InitFunck.initialized = false;
      tmpJSON=[
  {"kpr":"0", "pr":"0"},
  {"kpr":"1", "pr":"3.26"},
  {"kpr":"2", "pr":"3.33"},
  {"kpr":"3", "pr":"3.22"},
  {"kpr":"4", "pr":"3.15"},
  {"kpr":"5", "pr":"3.07"},
  {"kpr":"6", "pr":"3.01"},
  {"kpr":"7", "pr":"2.91"},
  {"kpr":"8", "pr":"2.83"},
  {"kpr":"9", "pr":"2.78"},
  {"kpr":"10", "pr":"2.74"},
  {"kpr":"11", "pr":"2.66"},
  {"kpr":"12", "pr":"2.56"},
  {"kpr":"13", "pr":"2.49"},
  {"kpr":"14", "pr":"2.4"},
  {"kpr":"15", "pr":"2.33"},
  {"kpr":"16", "pr":"2.24"},
  {"kpr":"17", "pr":"2.17"},
  {"kpr":"18", "pr":"2.11"},
  {"kpr":"19", "pr":"2.05"},
  {"kpr":"20", "pr":"1.99"},
  {"kpr":"21", "pr":"1.92"},
  {"kpr":"22", "pr":"1.84"},
  {"kpr":"23", "pr":"1.79"},
  {"kpr":"24", "pr":"1.74"},
  {"kpr":"25", "pr":"1.69"},
  {"kpr":"26", "pr":"1.64"},
  {"kpr":"27", "pr":"1.59"},
  {"kpr":"28", "pr":"1.55"},
  {"kpr":"29", "pr":"1.47"},
  {"kpr":"30", "pr":"1.4"},
  {"kpr":"31", "pr":"1.4"},
  {"kpr":"32", "pr":"1.4"},
  {"kpr":"33", "pr":"1.4"},
  {"kpr":"34", "pr":"1.4"},
  {"kpr":"35", "pr":"1.4"},
  {"kpr":"36", "pr":"1.4"},
  {"kpr":"37", "pr":"1.4"},
  {"kpr":"38", "pr":"1.4"},
  {"kpr":"39", "pr":"1.4"},
  {"kpr":"40", "pr":"1.4"},
  {"kpr":"41", "pr":"1.4"},
  {"kpr":"42", "pr":"1.4"},
  {"kpr":"43", "pr":"1.4"},
  {"kpr":"44", "pr":"1.4"},
  {"kpr":"45", "pr":"1.4"},
  {"kpr":"46", "pr":"1.4"},
  {"kpr":"47", "pr":"1.4"},
  {"kpr":"48", "pr":"1.4"},
  {"kpr":"49", "pr":"1.4"},
  {"kpr":"50", "pr":"1.4"},
  {"kpr":"51", "pr":"1.4"},
  {"kpr":"52", "pr":"1.4"},
  {"kpr":"53", "pr":"1.4"},
  {"kpr":"54", "pr":"1.4"},
  {"kpr":"55", "pr":"1.4"},
  {"kpr":"56", "pr":"1.4"},
  {"kpr":"57", "pr":"1.4"},
  {"kpr":"58", "pr":"1.4"},
  {"kpr":"59", "pr":"1.4"},
  {"kpr":"60", "pr":"1.4"}
];
  InitFunck.initialized = true;
  return tmpJSON;
  	};
	
  InitFunck.gettbl_kpr5 =function()  {
  	var tmpJSON;
      InitFunck.initialized = false;
      tmpJSON=[
  {"kpr":"0", "pr":"0"},
  {"kpr":"1", "pr":"1.7"},
  {"kpr":"2", "pr":"1.5"},
  {"kpr":"3", "pr":"1.5"},
  {"kpr":"4", "pr":"1.5"},
  {"kpr":"5", "pr":"1.4"},
  {"kpr":"6", "pr":"1.4"},
  {"kpr":"7", "pr":"1.4"},
  {"kpr":"8", "pr":"1.3"},
  {"kpr":"9", "pr":"1.3"},
  {"kpr":"10", "pr":"1.3"},
  {"kpr":"11", "pr":"1.3"},
  {"kpr":"12", "pr":"1.3"},
  {"kpr":"13", "pr":"1.2"},
  {"kpr":"14", "pr":"1.2"},
  {"kpr":"15", "pr":"1.2"},
  {"kpr":"16", "pr":"1.2"},
  {"kpr":"17", "pr":"1.1"},
  {"kpr":"18", "pr":"1.1"},
  {"kpr":"19", "pr":"1.1"},
  {"kpr":"20", "pr":"1.1"},
  {"kpr":"21", "pr":"1.1"},
  {"kpr":"22", "pr":"1"},
  {"kpr":"23", "pr":"1"},
  {"kpr":"24", "pr":"1"},
  {"kpr":"25", "pr":"1"},
  {"kpr":"26", "pr":"1"},
  {"kpr":"27", "pr":"1"},
  {"kpr":"28", "pr":"1"},
  {"kpr":"29", "pr":"1"},
  {"kpr":"30", "pr":"1"},
  {"kpr":"31", "pr":"1"},
  {"kpr":"32", "pr":"1"},
  {"kpr":"33", "pr":"1"},
  {"kpr":"34", "pr":"1"},
  {"kpr":"35", "pr":"1"},
  {"kpr":"36", "pr":"1"},
  {"kpr":"37", "pr":"1"},
  {"kpr":"38", "pr":"1"},
  {"kpr":"39", "pr":"1"},
  {"kpr":"40", "pr":"1"},
  {"kpr":"41", "pr":"1"},
  {"kpr":"42", "pr":"1"},
  {"kpr":"43", "pr":"1"},
  {"kpr":"44", "pr":"1"},
  {"kpr":"45", "pr":"1"},
  {"kpr":"46", "pr":"1"},
  {"kpr":"47", "pr":"1"},
  {"kpr":"48", "pr":"1"},
  {"kpr":"49", "pr":"1"},
  {"kpr":"50", "pr":"1"},
  {"kpr":"51", "pr":"1"},
  {"kpr":"52", "pr":"1"},
  {"kpr":"53", "pr":"1"},
  {"kpr":"54", "pr":"1"},
  {"kpr":"55", "pr":"1"},
  {"kpr":"56", "pr":"1"},
  {"kpr":"57", "pr":"1"},
  {"kpr":"58", "pr":"1"},
  {"kpr":"59", "pr":"1"},
  {"kpr":"60", "pr":"1"}
];
  InitFunck.initialized = true;
  return tmpJSON;
  	};
	
  InitFunck.gettbl_kpzb =function()  {
  	var tmpJSON;
      InitFunck.initialized = false;
      tmpJSON=[
  {"kpzb":"1", "pzb":"100%, без стягнень"},
  {"kpzb":"0.9", "pzb":"90%, -10%"},
  {"kpzb":"0.8", "pzb":"80%, -20%"},
  {"kpzb":"0.7", "pzb":"70%, -30%"},
  {"kpzb":"0.6", "pzb":"60%, -40%"},
  {"kpzb":"0.5", "pzb":"50%, -50%"},
  {"kpzb":"0", "pzb":"0%, -100%"}
];
  InitFunck.initialized = true;
  return tmpJSON;
  	};
	
  InitFunck.gettbl_sso =function()  {
  	var tmpJSON;
      InitFunck.initialized = false;
      tmpJSON=[
  {"ksso":"0", "sso":"0%"},
  {"ksso":"0.5", "sso":"50%"},
  {"ksso":"0.7", "sso":"70%"},
  {"ksso":"0.8", "sso":"80%"},
  {"ksso":"1", "sso":"100%"}
];
  InitFunck.initialized = true;
  return tmpJSON;
  	};
  
	
  InitFunck.initialize = function () {
    $rootScope.positions=InitFunck.getPosition();
    $rootScope.json_vzes=InitFunck.gettbl_vzes();
    $rootScope.json_tres=InitFunck.gettbl_tres();
    $rootScope.json_vres=InitFunck.gettbl_vres();
    $rootScope.json_kopses=InitFunck.gettbl_kops();
    $rootScope.json_kros=InitFunck.gettbl_kro();
    $rootScope.json_kpr1s=InitFunck.gettbl_kpr1();
    $rootScope.json_kpr2s=InitFunck.gettbl_kpr2();
    $rootScope.json_kpr3s=InitFunck.gettbl_kpr3();
    $rootScope.json_kpr4s=InitFunck.gettbl_kpr4();
    $rootScope.json_kpr5s=InitFunck.gettbl_kpr5();  
    $rootScope.json_kpzbs=InitFunck.gettbl_kpzb();
    $rootScope.json_kssos=InitFunck.gettbl_sso();  
    $rootScope.kvz="0.3";
    $rootScope.ktr="1.4";
    $rootScope.kvr="0";
    $rootScope.ops="1";
    $rootScope.ro="0";
    $rootScope.pzb="1";
    $rootScope.ksso="0";
    $rootScope.hideSSO= true; 
    InitFunck.changeflagPrem(1);  
    InitFunck.changePrembyVR(0);
    //$rootScope.json_prem=$rootScope.json_kpr1s;
  };
  InitFunck.changeflagPrem = function (selectvalue) {
  	$rootScope.flag_prem = selectvalue;
  };
  InitFunck.changeflagPrembyname= function (selname) {
      if (selname=="Десантно-штурмові війська")  {
          InitFunck.changeflagPrem(2);
	  $rootScope.hideSSO= true; 
      }  else if (selname=="Сили спеціальних операцій") { 
	  InitFunck.changeflagPrem(3); 
	  $rootScope.hideSSO= false;     
      }  else {
         InitFunck.changeflagPrem(1);
	 $rootScope.hideSSO= true;      
      }
   };
   InitFunck.changePrembyVR = function(vr) 
    {
      if (vr=="0") {
    	if ($rootScope.flag_prem==1) {$rootScope.json_prem=$rootScope.json_kpr1s};
        if ($rootScope.flag_prem==2) {$rootScope.json_prem=$rootScope.json_kpr3s};
	if ($rootScope.flag_prem==3) {$rootScope.json_prem=$rootScope.json_kpr5s};      
      } else {
    	if ($rootScope.flag_prem==1) {$rootScope.json_prem=$rootScope.json_kpr2s};
        if ($rootScope.flag_prem==2) {$rootScope.json_prem=$rootScope.json_kpr4s};
	if ($rootScope.flag_prem==3) {$rootScope.json_prem=$rootScope.json_kpr5s};      
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
  InitFunck.requestFullScreen= function() {
      var el=document.documentElement;
      var requestMethod = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;
            if (requestMethod) { // Native full screen.
                requestMethod.call(el);
            } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
                var wscript = new ActiveXObject("WScript.Shell");
                if (wscript !== null) {
                    wscript.SendKeys("{F11}");
                }
            }
            return false;
   };
   
   InitFunck.cancelFullScreen= function() {
  	var el = document;
      var requestMethod = el.cancelFullScreen||el.webkitCancelFullScreen||el.mozCancelFullScreen||el.exitFullscreen;
            if (requestMethod) { // cancel full screen.
                requestMethod.call(el);
            } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
                var wscript = new ActiveXObject("WScript.Shell");
                if (wscript !== null) {
                    wscript.SendKeys("{F11}");
                }
            }
   };
   
   InitFunck.toggleFullScreen= function() {
     var isInFullScreen = (document.fullScreenElement && document.fullScreenElement !== null) ||  (document.mozFullScreen || document.webkitIsFullScreen);
     if (isInFullScreen) {
           InitFunck.cancelFullScreen();
      } else {
          InitFunck.requestFullScreen();
      }
       return false;
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
    resolve : {function(InitFunck) {
     InitFunck.hideshowFAB(true);
     InitFunck.requestFullScreen();}
     }
  })
  .when('/calculator', {
    templateUrl : 'view/calculator.html',
    controller  : 'CalculatorController',
    resolve : {function(InitFunck) {
         InitFunck.hideshowFAB(false);
         if (!InitFunck.initialized) {InitFunck.initialize()};
         InitFunck.requestFullScreen();
        }
     }
  })
  .when('/positions', {
    templateUrl : 'view/positions.html',
    controller  : 'PositionsController',
    resolve : {function(InitFunck) {
        InitFunck.hideshowFAB(true);
        if (!InitFunck.initialized) {InitFunck.initialize()};
        InitFunck.requestFullScreen();
        }
     }
  })
  .when('/about', {
    templateUrl : 'view/about.html',
    controller  : 'AboutController',
    resolve : {function(InitFunck) {
     InitFunck.hideshowFAB(true);
     InitFunck.requestFullScreen();}
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

//.run(function($http, $rootScope, InitFunck){
	//InitFunck.requestFullScreen();
//})


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
        if (item.name=="Десантно-штурмові війська")  {
          InitFunck.changeflagPrem(2);
	  $rootScope.hideSSO= true; 	
        }  else if (item.name=="Сили спеціальних операцій") { 
	  InitFunck.changeflagPrem(3);
	  $rootScope.hideSSO= false; 	
        } else {
          InitFunck.changeflagPrem(1);
	  $rootScope.hideSSO= true; 	
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
  $scope.message1 = 'Розрахунок';
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
    // alert(vr);
     InitFunck.changePrembyVR(vr);
     var tr=InitFunck.GetValbyKey($ktr, 'ktr', 'tr', $rootScope.json_tres);
     var pr=InitFunck.GetValbyKey(tr, 'kpr', 'pr', $rootScope.json_prem);
     return Math.round($kpzb*pr*100*100)/100};
     $scope.spr = function($ktr=0, $kpzb=0, $kvr=0)  {return Math.round(($kpzb*($scope.kpr($ktr, $kpzb, $kvr)/100)*$scope.otr($ktr))*100)/100};
   $scope.sso = function($pm=0, $k=0)  {return Math.round($pm*$k*5*100)/100};	
  
   $scope.SumGZ = function() {return Math.round(($scope.s1+$scope.s2+$scope.s3+$scope.s4+$scope.s5+$scope.s6+$scope.s7)*100)/100};
   $scope.SumGZnaryku = function() {return Math.round($scope.SumGZ()*0.985*100)/100};

$scope.searchTermVZ;
      $scope.clearSearchTermVZ = function() {
        $scope.searchTermVZ = '';
      };
 $scope.searchTermTR;
      $scope.clearSearchTermTR= function() {
        $scope.searchTermTR= '';
      };
 
 $scope.toggleFullScreen= InitFunck.toggleFullScreen;
 
 // $scope.toggleFullScreen= function() {
   //   var elem=document.documentElement;
     // if (elem.webkitRequestFullscreen) {
     //   elem.webkitRequestFullscreen();
    //  }
//   };

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
