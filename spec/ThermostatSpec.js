describe('Thermostat',function(){

  let thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  })

  describe('constructor',function(){

    it('starts at 20 degrees',function(){
      expect(thermostat.showTemp()).toBe(20);
    })

  })

  describe('increase',function(){

    it('increases the temperature by the number passed as an argument',function(){
      thermostat.increaseTemp(10);
      expect(thermostat.showTemp()).toBe(30);
    })

  })

  describe('decrease', function() {

    it('decreases the temperature by the number passed as an argument', function(){
      thermostat.decreaseTemp(10);
      expect(thermostat.showTemp()).toBe(10);
    })

    it('throws an error of minimum temperature reached', function(){
      expect(function(){ thermostat.decreaseTemp(11) }).toThrowError('Minimum temperature reached');
    })

  })

  describe('power saving mode',function(){

    it('is on by default with a max temp of 25 degrees',function(){
      expect(thermostat.showPowerSavingMode()).toBe(true);
      expect(thermostat.showMaxTemp()).toBe(25);
    })

    it('can be turned off',function(){
      thermostat.powerSavingModeOff();
      expect(thermostat.showPowerSavingMode()).toBe(false);
      expect(thermostat.showMaxTemp()).toBe(32);
    })

    it('can be turned on again',function(){
      thermostat.powerSavingModeOff();
      thermostat.powerSavingModeOn();
      expect(thermostat.showPowerSavingMode()).toBe(true);
      expect(thermostat.showMaxTemp()).toBe(25);
    })

  })

})
