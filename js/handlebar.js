var registrationInputHandlebar = document.querySelector('.registrationInputHandlebar');
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
