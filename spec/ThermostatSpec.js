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

})
