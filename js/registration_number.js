var registrationInput = document.querySelector('.registrationInput');
//Button
var addBtn = document.querySelector('.addBtn');
var showBtn = document.querySelector('.showBtn');

var stored = localStorage.getItem('numbers') ? JSON.parse(localStorage.getItem('numbers')):{};

var main = mainRegistration(stored);
//Adding Event for the Button
addBtn.addEventListener('click', function(){
   main.setName(registrationInput.value);
});

showBtn.addEventListener('click', function(){

});

//Function(s)
function addElement (addedReg){
   // Adding the registration numbers in the html or dom
   var myList = document.createElement('li');
  var currentDiv = document.getElementById("addElements");
  var newContent = document.createTextNode(addedReg);
  myList.appendChild(newContent);
  currentDiv.appendChild(myList);
}

function mainRegistration(stored){
   var regMap = {};
   var counted = 0 ;
   var numbers = '';

   function setNumber(value){ numbers = value;}

   function registration(numbers){
      if(stored){
         regMap = stored;
      }
      if(numbers.startsWith('CA') || numbers.startsWith('CJ') ||
      numbers.startsWith('CK') || numbers.startsWith('CY') ||
      numbers.startsWith('CL')){
         if(regMap[numbers] === undefined){
            regMap[numbers] = 0 ;
            counted ++;
            addElement(numbers);
         }
      }

   }

   return {
      checkregistration : registration,

   }
}
