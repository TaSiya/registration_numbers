
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
      if(numbers.startsWith('CA') || numbers.startsWith('CJ') || numbers.startsWith('CY') ||
      numbers.startsWith('CL')){
         if(regMap[numbers] === undefined){
            regMap[numbers] = counted ;
            counted ++;
         }
         return numbers;
      }
      return '';
   }

   function getRegistrationNumber(){ return numbers;}
   function getMap(){ return regMap;}
   function countReg(){ return Object.keys(regMap).length; }

   function filter(location){
      var filterStore = [];
      var count = 0;
      if(application.isDataStored()){
         for(key in application.getDataMap()){
            if(key.startsWith(location)){
               filterStore[count] = key;
               count ++;
            }
         }
      }
      return filterStore;
   }

   return {
      checkRegistration : registration,
      setNumberPlate : setRegistrationNumber,
      getNumberPlate : getRegistrationNumber,
      getDataMap : getMap,
      regLength: countReg,
      isDataStored : arePlatesStored,
      filtered : filter
   }
}
