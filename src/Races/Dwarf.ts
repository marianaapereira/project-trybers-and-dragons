import Race from './Race';

const DWARF_MAX_LIFE_POINTS = 80;

class Dwarf extends Race {
  private _maxLifePoints = DWARF_MAX_LIFE_POINTS;
  private static _createdRacesInstances = 0;

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    this._createdRacesInstances += 1;
    return this._createdRacesInstances;
  }
}

export default Dwarf;