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
        assert.equal()
      });
    });
});
