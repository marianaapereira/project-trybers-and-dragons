import Race from './Race';

const ELF_MAX_LIFE_POINTS = 99;

class Elf extends Race {
  private _maxLifePoints = ELF_MAX_LIFE_POINTS;
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