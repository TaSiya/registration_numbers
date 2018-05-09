describe('Number Plate Registration App', function(){
    describe('Updating the number of plates', function(){
      it('6 correct number plates and 3 incorrect number plates', function(){
        let app1 = NumberPlateRegister();
        app1.setNumberPlate('CA 123');
        app1.checkRegistration(app1.getNumberPlate());
        app1.setNumberPlate('CY 321');
        app1.checkRegistration(app1.getNumberPlate());
        app1.setNumberPlate('CJ 234');
        app1.checkRegistration(app1.getNumberPlate());
        app1.setNumberPlate('CL 432');
        app1.checkRegistration(app1.getNumberPlate());
        app1.setNumberPlate('CY 345');
        app1.checkRegistration(app1.getNumberPlate());
        app1.setNumberPlate('CJ 543');
        app1.checkRegistration(app1.getNumberPlate());
        app1.setNumberPlate('C 456');
        app1.checkRegistration(app1.getNumberPlate());
        app1.setNumberPlate('CU 654');
        app1.checkRegistration(app1.getNumberPlate());
        app1.setNumberPlate('CK 567');
        app1.checkRegistration(app1.getNumberPlate());
        assert.equal(app1.regLength(), 6)
      });
      it('0 correct number plates and 4 incorrect number plates', function(){
        var app2 = NumberPlateRegister();

        app2.setNumberPlate('C 2262');
        app2.checkRegistration(app2.getNumberPlate());
        app2.setNumberPlate('QC 2882');
        app2.checkRegistration(app2.getNumberPlate());
        app2.setNumberPlate('CK 1562');
        app2.checkRegistration(app2.getNumberPlate());
        app2.setNumberPlate('CC 2192');
        app2.checkRegistration(app2.getNumberPlate());
        assert.equal(app2.regLength(), 0);
      });
    });
    describe('Does it only take CA, CJ, CY, and CL only? YES!',function(){
      it('Taking CA', function(){
        var app3 = NumberPlateRegister();
        app3.setNumberPlate('CA 123');
        assert.equal(app3.checkRegistration(app3.getNumberPlate()), 'CA 123');
      });
      it('Taking CJ', function(){
        var app4 = NumberPlateRegister();
        app4.setNumberPlate('CJ 123');
        assert.equal(app4.checkRegistration(app4.getNumberPlate()), 'CJ 123');
      });
      it('Taking CC', function(){
        var app5 = NumberPlateRegister();
        app5.setNumberPlate('CC 123');
        assert.equal(app5.checkRegistration(app5.getNumberPlate()), '');
      });
      it('Taking CL', function(){
        var app6 = NumberPlateRegister();
        app6.setNumberPlate('CL 123');
        assert.equal(app6.checkRegistration(app6.getNumberPlate()), 'CL 123');
      });
      it('Taking C', function(){
        var app7 = NumberPlateRegister();
        app7.setNumberPlate('C 123');
        assert.equal(app7.checkRegistration(app7.getNumberPlate()), '');
      });
    });
    describe('Does it store data as object(s)', function(){
      it('taking 3 correct plates and 2 incorrect plates',function(){
        var app8 = NumberPlateRegister();
        app8.setNumberPlate('CL 234');
        app8.checkRegistration(app8.getNumberPlate());
        app8.setNumberPlate('CY 134');
        app8.checkRegistration(app8.getNumberPlate());
        app8.setNumberPlate('CQ 134');
        app8.checkRegistration(app8.getNumberPlate());
        app8.setNumberPlate(' 134');
        app8.checkRegistration(app8.getNumberPlate());
        app8.setNumberPlate('CL 134');
        app8.checkRegistration(app8.getNumberPlate());
        assert.deepEqual(app8.getDataMap(),{'CL 234':0, 'CY 134':1, 'CL 134':2});
      });
      it('takes 4 incorrect registration plates', function(){
         var app9 = NumberPlateRegister();
         app9.setNumberPlate('GD 473232 SD');
         app9.checkRegistration(app9.getNumberPlate());
         app9.setNumberPlate('CC 840-320');
         app9.checkRegistration(app9.getNumberPlate());
         app9.setNumberPlate('');
         app9.checkRegistration(app9.getNumberPlate());
         app9.setNumberPlate('CCA 820-559');
         app9.checkRegistration(app9.getNumberPlate());
         assert.deepEqual(app9.getDataMap(),{});
      });
    });
    describe('Filtering the data', function(){
      it('filter Cape Town (CA) in the data', function(){
         var app10 = NumberPlateRegister();
         app10.setNumberPlate('CY 845');
         app10.checkRegistration(app10.getNumberPlate());
         app10.setNumberPlate('CA 231');
         app10.checkRegistration(app10.getNumberPlate());
         app10.setNumberPlate('CY 8450');
         app10.checkRegistration(app10.getNumberPlate());
         app10.setNumberPlate('CL 565');
         app10.checkRegistration(app10.getNumberPlate());
         app10.setNumberPlate('CA 000');
         app10.checkRegistration(app10.getNumberPlate());
         assert.deepEqual(app10.filtered('CA'),['CA 231','CA 000']);
      });
      it('filter George (CL) in the date', function(){
         var app11 = NumberPlateRegister();
         app11.setNumberPlate('CY 999');
         app11.checkRegistration(app11.getNumberPlate());
         app11.setNumberPlate('CL 125');
         app11.checkRegistration(app11.getNumberPlate());
         app11.setNumberPlate('CA 753');
         app11.checkRegistration(app11.getNumberPlate());
         app11.setNumberPlate('CJ 642');
         app11.checkRegistration(app11.getNumberPlate());
         app11.setNumberPlate('CL 089');
         app11.checkRegistration(app11.getNumberPlate());
         app11.setNumberPlate('CL 485');
         app11.checkRegistration(app11.getNumberPlate());
         assert.deepEqual(app11.filtered('CL'),['CL 125','CL 089','CL 485'])
      });
      it('filter Bellville (CY) in the date', function(){
         var app12 = NumberPlateRegister();
         app12.setNumberPlate('CY 999');
         app12.checkRegistration(app12.getNumberPlate());
         app12.setNumberPlate('CY 125');
         app12.checkRegistration(app12.getNumberPlate());
         app12.setNumberPlate('CA 753');
         app12.checkRegistration(app12.getNumberPlate());
         app12.setNumberPlate('CJ 642');
         app12.checkRegistration(app12.getNumberPlate());
         app12.setNumberPlate('CY 089');
         app12.checkRegistration(app12.getNumberPlate());
         app12.setNumberPlate('CY 485');
         app12.checkRegistration(app12.getNumberPlate());
         assert.deepEqual(app12.filtered('CY'),['CY 999','CY 125','CY 089','CY 485'])
      });
   });
});
