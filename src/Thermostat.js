class Thermostat {

  constructor(){
    this._temperature = 20;
    this._powerSavingMode = true;
    this._maxTemp = 25;
    this._energyUsage = 'medium-usage';
  }

  showTemp = () => this._temperature;
  showPowerSavingMode = () => this._powerSavingMode;
  showMaxTemp = () => this._maxTemp;
  showEnergyUsage = () => this._energyUsage;

  reset = () => this._temperature = 20;

  increaseTemp = degrees => {
    this._temperature += degrees;
    this.energyUsage();
  }

  decreaseTemp = degrees => {
    if (this._temperature - degrees < 10) {
      throw new Error('Minimum temperature reached');
    } else {
    this._temperature -= degrees;
    this.energyUsage();
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

  energyUsage = () => {
    if(this._temperature < 18) {
      this._energyUsage = 'low-usage';
    } else if(this._temperature > 18 && this._temperature <= 25){
      this._energyUsage = 'medium-usage';
    } else if(this._temperature > 25){
      this._energyUsage = 'high-usage';
    }
  }


  // changeMaxTemp = () => this._maxTemp = 32;

}
