import Race from './Race';
import maxLifePoints from '../consts/maxLifePoints.consts';

class Elf extends Race {
  private _maxLifePoints = maxLifePoints.elf;
  private static _createdRacesInstances = 0;

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    this._createdRacesInstances += 1;
    return this._createdRacesInstances;
  }
}

export default Elf;