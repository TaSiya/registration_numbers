var registrationInput = document.querySelector('.registrationInput');
//Button
var addBtn = document.querySelector('.addBtn');

//Adding Event for the Button
addBtn.addEventListener('click', function(){
   addElement();
});

//Function(s)

function addElement () {
   var myList = document.createElement('li');
  var currentDiv = document.getElementById("addElements");
  var newContent = document.createTextNode(registrationInput.value);
  myList.appendChild(newContent);
  currentDiv.appendChild(myList);

}
