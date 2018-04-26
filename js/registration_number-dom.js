var registrationInput = document.querySelector('.registrationInput');
var registrationTypeInput = document.querySelector('.registrationTypeInput');
//Button
var addBtn = document.querySelector('.addBtn');
var showBtn = document.querySelector('.showBtn');
var resetBtn = document.querySelector('.resetBtn');
var currentDiv = document.getElementById("unordered");

var stored = localStorage.getItem('numbers') ? JSON.parse(localStorage.getItem('numbers')):{};

var application = NumberPlateRegister(stored);

//Adding Event for the Button
addBtn.addEventListener('click', function(){
   application.setNumberPlate(registrationInput.value);
   application.checkRegistration(application.getNumberPlate());
   localStorage.setItem('numbers', JSON.stringify(application.getDataMap()));
});

resetBtn.addEventListener('click', function(){
   localStorage.clear();
   location.reload();
});

showBtn.addEventListener('click', function(){
   var registrationTypeCheck = '';
   var checkedRadioBtn = document.querySelector("input[name='registrationTypeInput']:checked");
   if (checkedRadioBtn){
      currentDiv.innerHTML = "";
      registrationTypeCheck = checkedRadioBtn.value;
      application.checking(registrationTypeCheck);
   }
});

window.addEventListener('load', function(){
   application.isDataStored();
   for(key in application.getDataMap()){
         addElement(key);
      }
});

//Function(s)
function addElement(addedReg){
   // Adding the registration numbers in the html or dom
   var listItems = document.createElement('li');
   var newContent = document.createTextNode(addedReg);
   listItems.appendChild(newContent);
   currentDiv.appendChild(listItems);
}
