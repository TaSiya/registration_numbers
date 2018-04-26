
function MainRegistration(stored){
   var regMap = {};
   var counted = 0 ;
   var numbers = '';

   function setNumber(value){ numbers = value;}

   function isStored(){
      if(stored){
         regMap = stored;

         return true;
      }
      else{
         return false;
      }
   }

   function registration(numbers){
      isStored();
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

   function radioCheck(registrationTypeCheck){
      if(registrationTypeCheck === 'CA' || registrationTypeCheck === 'CJ' || registrationTypeCheck === 'CY' || registrationTypeCheck === 'CL'){
        //Filter the registration numbers
        filter(registrationTypeCheck);
        }
      else{
         isStored();
         for(key in regMap){
               addElement(key);
            }
         }
   }

   function filter(value){
      if(isStored()){
         for(key in regMap){
            console.log();
            if(key.startsWith(value)){
               addElement(key);
            }
         }
      }

   }


   function getNumber(){ return numbers;}
   function getMap(){ return regMap;}
   function countReg(){ return Object.keys(regMap).length; }

   return {
      checkRegistration : registration,
      setReg : setNumber,
      getReg : getNumber,
      getRegMap : getMap,
      regLength: countReg,
      showFiltered : filter,
      checking: radioCheck,
      isDataStored : isStored
   }
}
