describe('Number Plate Registration App', function(){
    describe('Updating the number of plates', function(){
      it('6 correct number plates and 3 incorrect number plates', function(){
        let app1 = NumberPlateRegister();
        app1.checkRegistration('CA 123');
        app1.checkRegistration('CY 321');
        app1.checkRegistration('CJ 234');
        app1.checkRegistration('CL 432');
        app1.checkRegistration('CY 345');
        app1.checkRegistration('CJ 543');
        app1.checkRegistration('C 456')
        app1.checkRegistration('CU 654');
        app1.checkRegistration('CK 567');
        assert.equal(app1.regLength(), 6)
      });
      it('0 correct number plates and 4 incorrect number plates', function(){
        var app2 = NumberPlateRegister();
        app2.checkRegistration('C 2262');
        app2.checkRegistration('QC 2882');
        app2.checkRegistration('CK 1562');
        app2.checkRegistration('CC 2192');
        assert.equal(app2.regLength(), 0);
      });
    });
    describe('Does it only take CA, CJ, CY, and CL only? YES!',function(){
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
      it('Taking CL', function(){
        var app6 = NumberPlateRegister();
        assert.equal(app6.checkRegistration('CL 123'), 'CL 123');
      });
      it('Taking C', function(){
        var app7 = NumberPlateRegister();
        assert.equal(app7.checkRegistration('C 123'), '');
      });
    });
    describe('Does it store data as object(s)', function(){
      it('taking 3 correct plates and 2 incorrect plates',function(){
        var app8 = NumberPlateRegister();
        app8.checkRegistration('CL 234');
        app8.checkRegistration('CY 134');
        app8.checkRegistration('CQ 134');
        app8.checkRegistration(' 134');
        app8.checkRegistration('CL 134');
        assert.deepEqual(app8.getDataMap(),{'CL 234':0, 'CY 134':1, 'CL 134':2});
      });
      it('takes 4 incorrect registration plates', function(){
         var app9 = NumberPlateRegister();
         app9.checkRegistration('GD 473232 SD');
         app9.checkRegistration('CC 840-320');
         app9.checkRegistration('');
         app9.checkRegistration('CCA 820-559');
         assert.deepEqual(app9.getDataMap(),{});
      });
    });
    describe('Filtering the data', function(){
      it('filter Cape Town (CA) in the data', function(){
         var app10 = NumberPlateRegister();
         app10.checkRegistration('CY 845');
         app10.checkRegistration('CA 231');
         app10.checkRegistration('CY 8450');
         app10.checkRegistration('CL 565');
         app10.checkRegistration('CA 000');
         assert.deepEqual(app10.filtered('CA'),['CA 231','CA 000']);
      });
      it('filter George (CL) in the date', function(){
         var app11 = NumberPlateRegister();
         app11.checkRegistration('CY 999');
         app11.checkRegistration('CL 125');
         app11.checkRegistration('CA 753');
         app11.checkRegistration('CJ 642');
         app11.checkRegistration('CL 089');
         app11.checkRegistration('CL 485');
         assert.deepEqual(app11.filtered('CL'),['CL 125','CL 089','CL 485'])
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
});
