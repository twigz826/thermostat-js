class Thermostat {

  constructor(){
    this._temperature = 20
    this._powerSavingMode = true
    this._maxTemp = 25
  }

  showTemp = () => this._temperature;
  showPowerSavingMode = () => this._powerSavingMode;
  showMaxTemp = () => this._maxTemp;

  increaseTemp = degrees => this._temperature += degrees;

  decreaseTemp = degrees => {
    if (this._temperature - degrees < 10) {
      throw new Error('Minimum temperature reached');
    } else {
    this._temperature -= degrees;
    }
  }

  powerSavingModeOff = () => {
    this._powerSavingMode = false;
    this._maxTemp = 32;
  }

  powerSavingModeOn = () => {
    this._powerSavingMode = true;
    this._maxTemp = 25;
  }

  // changeMaxTemp = () => this._maxTemp = 32;

}
