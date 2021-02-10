class Thermostat {

  constructor(){
    this._temperature = 20
  }

  showTemp = () => this._temperature;

  increaseTemp = degrees => this._temperature += degrees;

  decreaseTemp = degrees => {
    if (this._temperature - degrees < 10) {
      throw new Error('Minimum temperature reached');
    } else {
    this._temperature -= degrees;
    }
  }
}
