describe('Number Plate Registration App', function(){
    describe('Updating the number of plates', function(){
      it('7 correct number plates and 2 incorrect number plates', function(){
        let app1 = NumberPlateRegister();
        app1.checkRegistration('CA 123');
        app1.checkRegistration('CY 321');
        app1.checkRegistration('CJ 234');
        app1.checkRegistration('CAW 432');
        app1.checkRegistration('CY 345');
        app1.checkRegistration('CJ 543');
        app1.checkRegistration('C 456')
        app1.checkRegistration('CU 654');
        app1.checkRegistration('CAW 567');
        assert.equal(app1.regLength(), 7)
      });
      it('0 correct number plates and 4 incorrect number plates', function(){
        var app2 = NumberPlateRegister();
        app2.checkRegistration('C 2262');
        app2.checkRegistration('QC 2882');
        app2.checkRegistration('CZ 1562');
        app2.checkRegistration('CC 2192');
        assert.equal(app2.regLength(), 0);
      });
    });
    describe('Does it only take CA, CJ, CY, and CAW only? YES!',function(){
      it('Taking CA', function(){
        var app3 = NumberPlateRegister();
        assert.equal(app3.checkRegistration('CA 123'), 'CA 123');
      });
      it('Taking CJ', function(){
        var app4 = NumberPlateRegister();
        assert.equal(app4.checkRegistration('CJ 123'), 'CJ 123');
      });
      it('Taking CC', function(){
        var app5 = NumberPlateRegister();
        assert.equal(app5.checkRegistration('CC 123'), '');
      });
      it('Taking CAW', function(){
        var app6 = NumberPlateRegister();
        assert.equal(app6.checkRegistration('CAW 123'), 'CAW 123');
      });
      it('Taking C', function(){
        var app7 = NumberPlateRegister();
        assert.equal(app7.checkRegistration('C 123'), '');
      });
    });
    describe('Does it store data as object(s)', function(){
      it('taking 3 correct plates and 2 incorrect plates',function(){
        var app8 = NumberPlateRegister();
        app8.checkRegistration('CAW 234');
        app8.checkRegistration('CY 134');
        app8.checkRegistration('CQ 134');
        app8.checkRegistration(' 134');
        app8.checkRegistration('CAW 134');
        assert.deepEqual(app8.getDataMap(),{'CAW 234':0, 'CY 134':1, 'CAW 134':2});
      });
      it('takes 4 incorrect registration plates', function(){
         var app9 = NumberPlateRegister();
         app9.checkRegistration('GD 473232 SD');
         app9.checkRegistration('CC 840-320');
         app9.checkRegistration('');
         app9.checkRegistration('CCAC 820-559');
         assert.deepEqual(app9.getDataMap(),{});
      });
    });
    describe('Filtering the data', function(){
      it('filter Cape Town (CA) in the data', function(){
         var app10 = NumberPlateRegister();
         app10.checkRegistration('CY 845');
         app10.checkRegistration('CA 231');
         app10.checkRegistration('CAW 760');
         app10.checkRegistration('CY 8450');
         app10.checkRegistration('CA 000');
         assert.deepEqual(app10.filtered('CA'),['CA 231','CA 000']);
      });
      it('filter Stellenbosch (CK) in the date', function(){
         var app11 = NumberPlateRegister();
         app11.checkRegistration('CY 999');
         app11.checkRegistration('CAW 125');
         app11.checkRegistration('CA 753');
         app11.checkRegistration('CJ 642');
         app11.checkRegistration('CAW 089');
         app11.checkRegistration('CAW 485');
         assert.deepEqual(app11.filtered('CAW'),['CAW 125','CAW 089','CAW 485'])
      });
      it('filter Bellville (CY) in the date', function(){
         var app12 = NumberPlateRegister();
         app12.checkRegistration('CY 999');
         app12.checkRegistration('CY 125');
         app12.checkRegistration('CA 753');
         app12.checkRegistration('CJ 642');
         app12.checkRegistration('CY 089');
         app12.checkRegistration('CY 485');
         assert.deepEqual(app12.filtered('CY'),['CY 999','CY 125','CY 089','CY 485'])
      });
   });
   describe('checking if the city is added to the app', function(){
      it('check if CA (Cape Town) is valid', function(){
         var app13 = NumberPlateRegister();
         assert.equal(app13.radioChecker('CA'), true);
      });
      it('check if CY (Bellville) is valid', function(){
         var app13 = NumberPlateRegister();
         assert.equal(app13.radioChecker('CY'), true);
      });
      it('check if CCN (Unknown) is valid', function(){
         var app13 = NumberPlateRegister();
         assert.equal(app13.radioChecker('CCN'), false);
      });
   });
});
