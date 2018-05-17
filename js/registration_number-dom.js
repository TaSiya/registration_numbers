var registrationInput = document.querySelector('.registrationInput');
var registrationTypeInput = document.querySelector('.registrationTypeInput');
//Button
var addBtn = document.querySelector('.addBtn');
var showBtn = document.querySelector('.showBtn');
var resetBtn = document.querySelector('.resetBtn');

var currentDiv = document.getElementById("unordered");
var currentDivWarning = document.getElementById('message');

var stored = localStorage.getItem('numbers') ? JSON.parse(localStorage.getItem('numbers')):{};

var plate = '';

var application = NumberPlateRegister(stored);

//Adding Event for the Button
addBtn.addEventListener('click', function(){
   currentDivWarning.textContent = '';
   plate = application.checkRegistration(registrationInput.value);
   if(plate !== ''){
     addPlateElement(plate);
     localStorage.setItem('numbers', JSON.stringify(application.getDataMap()));
   }
   else{
      warning(registrationInput.value);
   }
   registrationInput.value = '';
});

resetBtn.addEventListener('click', function(){
   localStorage.removeItem('numbers');
   location.reload();
});

showBtn.addEventListener('click', function(){
   var registrationTypeCheck = '';
   var checkedRadioBtn = document.querySelector("input[name='registrationTypeInput']:checked");
   if (checkedRadioBtn){
      currentDiv.innerHTML = "";
      registrationTypeCheck = checkedRadioBtn.value;
      if(registrationTypeCheck.startsWith('all')){
         display(application.getListMap());
      }
      else{
         var filteredList = application.filtered(registrationTypeCheck);
         display(filteredList);
      }
   }
});

window.addEventListener('load', function(){
   application.isDataStored();
   display(application.getListMap());
});

//Function(s)
function addPlateElement(addedReg){
   // Adding the registration numbers in the html or dom
   var listItems = document.createElement('li');
   var newContent = document.createTextNode(addedReg);
   listItems.appendChild(newContent);
   currentDiv.appendChild(listItems);

}

function display(list){
   for(var i = 0; i < list.length; i++){
      addPlateElement(list[i]);
   }
}

function warning(value){
   var warn =' is incorrect. Example below';
   var myH6 = document.createElement('H6');
   var myValue = document.createTextNode(value);

   var paragraph = document.createElement('p');
   var newContent = document.createTextNode('( '+myValue.textContent+' )' + warn);
   myH6.style.color='red';
   myH6.appendChild(myValue);
   paragraph.appendChild(newContent);
   currentDivWarning = document.getElementById('message');
   currentDivWarning.appendChild(paragraph);
}
