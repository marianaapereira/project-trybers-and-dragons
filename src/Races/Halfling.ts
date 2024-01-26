import Race from './Race';

const HALFLING_MAX_LIFE_POINTS = 60;

class Halfling extends Race {
  private _maxLifePoints = HALFLING_MAX_LIFE_POINTS;
  private static _createdRacesInstances = 0;

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    this._createdRacesInstances += 1;
    return this._createdRacesInstances;
  }
}

export default Halfling;