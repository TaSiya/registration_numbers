var registrationInput = document.querySelector('.registrationInput');
var registrationTypeInput = document.querySelector('.registrationTypeInput');
//Button
var addBtn = document.querySelector('.addBtn');
var showBtn = document.querySelector('.showBtn');
var resetBtn = document.querySelector('.resetBtn');
var currentDiv = document.getElementById("unordered");

var stored = localStorage.getItem('numbers') ? JSON.parse(localStorage.getItem('numbers')):{};

var main = MainRegistration(stored);

//Adding Event for the Button
addBtn.addEventListener('click', function(){
   main.setReg(registrationInput.value);
   main.checkRegistration(main.getReg());
   localStorage.setItem('numbers', JSON.stringify(main.map()));
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
      main.checking(registrationTypeCheck);

   }
});

window.addEventListener('load', function(){
   main.isDataStored();
   for(key in main.getRegMap()){
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
