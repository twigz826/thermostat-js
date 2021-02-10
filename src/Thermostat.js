class Thermostat {

  constructor(){
    this._temperature = 20
  }

  showTemp(){
    return this._temperature
  }

  increaseTemp(degrees){
    this._temperature += degrees
  }
}
