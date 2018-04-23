var registrationInput = document.querySelector('.registrationInput');
var registrationTypeInput = document.querySelector('.registrationTypeInput');
//Button
var addBtn = document.querySelector('.addBtn');
var showBtn = document.querySelector('.showBtn');
var resetBtn = document.querySelector('.resetBtn');

var stored = localStorage.getItem('numbers') ? JSON.parse(localStorage.getItem('numbers')):{};

var main = mainRegistration(stored);
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
      registrationTypeCheck = checkedRadioBtn.value;
   }
   for(key in main.map()){
      if(key.startsWith(registrationTypeCheck)){
         location.reload();
         addElement(key);
      }
   }
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
            regMap[numbers] = counted ;
            counted ++;
            addElement(numbers);

         }
      }

   }

   function getNumber(){ return numbers;}

   function getMap(){ return regMap;}

   return {
      checkRegistration : registration,
      setReg : setNumber,
      getReg : getNumber,
      map : getMap
   }
}
