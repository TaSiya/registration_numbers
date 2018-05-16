
function NumberPlateRegister(stored){
   var regMap = {};
   var counted = 0 ;
   var numbers = '';

   function arePlatesStored(){
      if(stored){
         regMap = stored;
         return true;
      }
      else{
         return false;
      }
   }

   function registration(plate){
      arePlatesStored();
      var temp = plate.substr(0,3);
      console.log(plate);
      console.log(temp);
      temp = temp.trim();
      if(temp == 'CA'  || temp === 'CJ' || temp === 'CY' || temp === 'CAW' ){
         if(regMap[plate] === undefined){
            regMap[plate] = counted ;
            counted ++;
         }
            numbers = plate;
           return plate;
      }
      else{ return ''; }
   }

   function getMap(){ return regMap;}
   function countReg(){ return Object.keys(regMap).length; }
   function listMap(){ return Object.keys(regMap);}

   function filter(location){
      var filterStore = [];
      var count = 0;
      var temp = '';
      var store = Object.keys(regMap);
      for(let i=0; i<store.length;i++){
         temp = store[i].slice(0,3);
         temp = temp.trim();
         if(temp === location){

            filterStore[count] = store[i];
            count ++;
         }
      }

   return filterStore;
   }

   return {
      checkRegistration : registration,
      getDataMap : getMap,
      regLength: countReg,
      isDataStored : arePlatesStored,
      filtered : filter,
      getListMap : listMap
   }
}
