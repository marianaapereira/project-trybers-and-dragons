import Race from './Race';

const ORC_MAX_LIFE_POINTS = 74;

class Orc extends Race {
  private _maxLifePoints = ORC_MAX_LIFE_POINTS;
  private static _createdRacesInstances = 0;

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    this._createdRacesInstances += 1;
    return this._createdRacesInstances;
  }
}

export default Orc;