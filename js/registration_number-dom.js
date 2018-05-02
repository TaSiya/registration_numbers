var registrationInput = document.querySelector('.registrationInput');
var registrationTypeInput = document.querySelector('.registrationTypeInput');
//Button
var addBtn = document.querySelector('.addBtn');
var showBtn = document.querySelector('.showBtn');
var resetBtn = document.querySelector('.resetBtn');

var currentDiv = document.getElementById("unordered");

var stored = localStorage.getItem('numbers') ? JSON.parse(localStorage.getItem('numbers')):{};

var plate = '';

var application = NumberPlateRegister(stored);

//Adding Event for the Button
addBtn.addEventListener('click', function(){
   application.setNumberPlate(registrationInput.value);
   plate = application.checkRegistration(application.getNumberPlate());
   if(plate !== ''){
     addElement(plate);
     localStorage.setItem('numbers', JSON.stringify(application.getDataMap()));
   }
   registrationInput.value = '';
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
      radioCheck(registrationTypeCheck);
   }
});

window.addEventListener('load', function(){
   application.isDataStored();
   display();
});

//Function(s)
function addElement(addedReg){
   // Adding the registration numbers in the html or dom
   var listItems = document.createElement('li');
   var newContent = document.createTextNode(addedReg);
   listItems.appendChild(newContent);
   currentDiv.appendChild(listItems);
}

// Filtering the data if necessary.
function radioCheck(registrationTypeCheck){
   if(registrationTypeCheck === 'CA' || registrationTypeCheck === 'CJ' || registrationTypeCheck === 'CY' || registrationTypeCheck === 'CL'){
      // Calling a Filtering function called filter
     filter(registrationTypeCheck);
     }
   else{
      //check if there is any data we can work with
      if(application.isDataStored()){
         display();
      }
   }
}

function filter(location){
   if(application.isDataStored()){
      for(key in application.getDataMap()){
         if(key.startsWith(location)){addElement(key);}
      }
   }
}

function display(){
   for(key in application.getDataMap()){ addElement(key); }
}
