var registrationInputHandlebar = document.querySelector('.registrationInputHandlebar');
var registrationTypeInputHandlebar = document.querySelector('.registrationTypeInputHandlebar');
//Button
var addBtnHandlebar = document.querySelector('.addBtnHandlebar');
var showBtnHandlebar = document.querySelector('.showBtnHandlebar');
var resetBtnHandlebar = document.querySelector('.resetBtnHandlebar');

var unorderedHandlebar = document.getElementById("unorderedHandlebar");
var messageHandlebar = document.getElementById('messageHandlebar');

var messageTemplate = document.querySelector('.messageTemplate').innerHTML;
var displayTemplate = document.querySelector('.displayTemplate').innerHTML;

var storedhandlebar = localStorage.getItem('numbersHandleBar') ? JSON.parse(localStorage.getItem('numbersHandleBar')):{};

var plateHandlebar = '';

var application2 = NumberPlateRegister(storedhandlebar);

var registrationCompilerMessage = Handlebars.compile(messageTemplate);
var registrationCompilerDisplay = Handlebars.compile(displayTemplate);

resetBtnHandlebar.addEventListener('click', function(){
   localStorage.removeItem('numbersHandleBar');
   location.reload();
});

window.addEventListener('load', function(){
   application2.isDataStored();
   displayHandlebar(application2.getListMap());
});

addBtnHandlebar.addEventListener('click', function(){

   plateHandlebar = application2.checkRegistration(registrationInputHandlebar.value);
   if(plateHandlebar !== ''){
     addPlateElementHandlebar(plateHandlebar);
     localStorage.setItem('numbersHandleBar', JSON.stringify(application2.getDataMap()));
   }
   else{
      warningHandlebar(registrationInputHandlebar.value);
   }
   registrationInputHandlebar.value = '';

});

showBtnHandlebar.addEventListener('click', function(){
   var registrationTypeCheckHandlebar = '';
   var checkedRadioBtnHandlebar = document.querySelector("input[name='registrationTypeInputHandlebar']:checked");
   if (checkedRadioBtnHandlebar){
      unorderedHandlebar.innerHTML = "";
      registrationTypeCheckHandlebar = checkedRadioBtnHandlebar.value;
      if(registrationTypeCheckHandlebar.startsWith('all')){
         displayHandlebar(application2.getListMap());
      }
      else{
         var filteredListHandlerbar = application2.filtered(registrationTypeCheckHandlebar);
         displayHandlebar(filteredListHandlerbar);
      }
   }
});

function warningHandlebar(numberPlate){
   var data = {
      message : numberPlate
   }
   var compiledPlate = registrationCompilerMessage(data);
   messageHandlebar.innerHTML = compiledPlate;
}

function addPlateElementHandlebar(plate){

   var displayPlate = {
      plates : application2.getListMap()
   }
   console.log(displayPlate.plates);
   var compiledPlate = registrationCompilerDisplay(displayPlate);
   unorderedHandlebar.innerHTML = compiledPlate;
}

function displayHandlebar(list){
   var dataList = {
      plates : list
   }
   var compiledPlate = registrationCompilerDisplay(dataList);
   unorderedHandlebar.innerHTML = compiledPlate;
}

function radioCheckHandlebar(registrationTypeCheckHandlebar){
   if(registrationTypeCheckHandlebar === 'CA' || registrationTypeCheckHandlebar === 'CJ' || registrationTypeCheckHandlebar === 'CY' || registrationTypeCheckHandlebar === 'CAW'){
      // Calling a Filtering function called
     var filteredList = application2.filtered(registrationTypeCheckHandlebar);
     displayFilterHandlebar(filteredList);
     }
   else{
      //this is for displaying all number plates stored.
      if(application2.isDataStored()){
         displayHandlebar();
      }
   }
}
