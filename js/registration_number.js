
function NumberPlateRegister(stored){
   var regMap = {};
   var counted = 0 ;
   var numbers = '';

   function setRegistrationNumber(value){ numbers = value;}
   function arePlatesStored(){
      if(stored){
         regMap = stored;
         return true;
      }
      else{
         return false;
      }
   }

   function registration(numbers){
      arePlatesStored();
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
   // Filtering the data if necessary.
   function radioCheck(registrationTypeCheck){
      if(registrationTypeCheck === 'CA' || registrationTypeCheck === 'CJ' || registrationTypeCheck === 'CY' || registrationTypeCheck === 'CL'){
         // Calling a Filtering function called filter
        filter(registrationTypeCheck);
        }
      else{
         //check if there is any data we can work with
         if(arePlatesStored()){
            for(key in regMap){addElement(key);}
         }else{}
      }
   }

   function filter(value){
      if(arePlatesStored()){
         for(key in regMap){
            if(key.startsWith(value)){addElement(key);}
         }
      }
   }
   function getRegistrationNumber(){ return numbers;}
   function getMap(){ return regMap;}
   function countReg(){ return Object.keys(regMap).length; }

   return {
      checkRegistration : registration,
      setNumberPlate : setRegistrationNumber,
      getNumberPlate : getRegistrationNumber,
      getDataMap : getMap,
      regLength: countReg,
      showFiltered : filter,
      checking: radioCheck,
      isDataStored : arePlatesStored
   }
}
