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
        app8.setNumberPlate('CA 234');
        app8.checkRegistration(app8.getNumberPlate());
        app8.setNumberPlate('CY 234');
        app8.checkRegistration(app8.getNumberPlate());
        app8.setNumberPlate('CX 234');
        app8.checkRegistration(app8.getNumberPlate());
        app8.setNumberPlate('CZ 234');
        app8.checkRegistration(app8.getNumberPlate());
        
        assert.deepEqual(app8.getDataMap(),);
      });
    });
});
